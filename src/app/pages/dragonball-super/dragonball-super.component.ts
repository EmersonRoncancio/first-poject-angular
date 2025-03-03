import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { AddCharacterListComponent } from "../../components/dragonball/add-character-list/add-character-list.component";
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  name: string;
  power: string;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterListComponent, AddCharacterListComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css'
})
export class DragonballSuperComponent {

  public dragonBallService = inject(DragonballService)
  public character = this.dragonBallService.character

  addCharacter(chacaterUpdate: Character){
    this.dragonBallService.addCharacter(chacaterUpdate)
  }
}
