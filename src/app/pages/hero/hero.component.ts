import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [UpperCasePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  name = signal<string>('ironman')
  age = signal<number>(35)
  heroDescription = computed(() => `${this.name()} is ${this.age()} years old`)
  capitalizeName = computed(() => this.name().toUpperCase())

  // getHeroDescription(){
  //   return `${this.name()} is ${this.age()} years old`
  // }

  changeHero(){
    this.name.set('spiderman')
    this.age.set(22)
  }

  resetForm() {
    this.name.set('ironman')
    this.age.set(35)
  }

  changeAge(){
    this.age.set(60)
  }
}
