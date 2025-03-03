import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';
import { DragonballService } from '../../../services/dragonball.service';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  character = input.required<Character[]>();
  dragonBallService = inject(DragonballService)

  deleteCharacter(name: string) {
    this.dragonBallService.deleteCharacter(name)
  }
}
