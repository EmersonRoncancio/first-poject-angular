import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountComponent {

  constructor() {
    // setInterval(() => {
    //   this.increment();
    // }, 2000);
  }

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
