import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

  character = signal<Character[]>([
    {name: 'Goku', power: 'Super Saiyan'},
    {name: 'Vegeta', power: 'Super Saiyan'},
    {name: 'Gohan', power: 'Super Saiyan'},
  ])

  addCharacter(character: Character){
    this.character.update(char=> [...char, character])
  }

  deleteCharacter(name: string){
    this.character.update((character)=> character.filter((char)=> char.name !== name))
  }
}
