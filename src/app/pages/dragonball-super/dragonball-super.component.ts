import { Component, signal } from '@angular/core';

interface Character {
  name: string;
  power: string;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  name = signal<string>('');
  power = signal<string>('');

  character = signal<Character[]>([
    {name: 'Goku', power: 'Super Saiyan'},
    {name: 'Vegeta', power: 'Super Saiyan'},
    {name: 'Gohan', power: 'Super Saiyan'},
  ])

  addCharacter(name: string, power: string){
    this.character.update(charcter=> [...charcter, {name, power}])
  }

  deleteCharacter(name: string){
    this.character.update((character)=> character.filter((char)=> char.name !== name))
  }

  addName(value: string){
    this.name.set(value);
  }

  addPower(value: string){
    this.power.set(value);
  }

  addNewCharacter(){
    if(!this.name() || !this.power()){
      return
    }

    this.character.update(char=> [...char, {
      name: this.name(),
      power: this.power()
    }])

    this.name.set('')
    this.power.set('')

    console.log(this.character())
  }
}
