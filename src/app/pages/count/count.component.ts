import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {

  countSignal = signal(0);

  increment(){
    this.countSignal.update((count) => count + 1);
  }

  decrement(){
    this.countSignal.update((count) => count - 1);
  }

  reset(){
    this.countSignal.set(0);
  }
}
