import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'add-add-character-list',
  imports: [],
  templateUrl: './add-character-list.component.html',
  styleUrl: './add-character-list.component.css',
})
export class AddCharacterListComponent {

  nameCharcter = signal<string>('');
  powerCharacter = signal<string>('');
  dragonBallService = inject(DragonballService)
  newCharcter = output<Character>()

  addPower(txtName: string) {
    this.nameCharcter.set(txtName);
  }

  addName(txtPower: string) {
    this.powerCharacter.set(txtPower);
  }


  addNewCharacter(){
    if(!this.nameCharcter() || !this.powerCharacter()){
      return
    }

    const character: Character = {
      name: this.nameCharcter(),
      power: this.powerCharacter()
    }

    this.newCharcter.emit(character)
  }
}
