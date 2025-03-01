import { Component, signal } from '@angular/core';

interface Character {
  name: string;
  power: string;
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {

character = signal<Character[]>([
  {name: 'Goku', power: 'Super Saiyan'},
  {name: 'Vegeta', power: 'Super Saiyan'},
  {name: 'Gohan', power: 'Super Saiyan'},
  {name: 'Trunks', power: 'Super Saiyan'},
  {name: 'Goten', power: 'Super Saiyan'},
  {name: 'Piccolo', power: 'Namekian'},
  {name: 'Krillin', power: 'Human'},
  {name: 'Tien', power: 'Human'},
])

deleteCharacter(name: string){
  this.character.update((character)=> character.filter((char)=> char.name !== name))
}
}
