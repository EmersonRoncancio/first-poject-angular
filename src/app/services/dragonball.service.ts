import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const getLocalSorage = (): Character[] => {
  const characters = localStorage.getItem('characters')
  if(characters){
    return JSON.parse(characters)
  }
  return []
}

@Injectable({providedIn: 'root'})
export class DragonballService {

  character = signal<Character[]>(getLocalSorage())

  saveToLocalStorage = effect(()=>{
    localStorage.setItem('characters', JSON.stringify(this.character()))
  })

  addCharacter(character: Character){
    this.character.update(char=> [...char, character])
  }

  deleteCharacter(name: string){
    this.character.update((character)=> character.filter((char)=> char.name !== name))
  }
}
