import { Component,  } from '@angular/core';


//Component es un decorador para trasnformar la clase a component
@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter : {{counter}}</h3>
    <button (click)="increaseBy(1)" >+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent {
  constructor() {}

  counter = 20;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  reset():void{
    this.counter = 10;
  }

}
