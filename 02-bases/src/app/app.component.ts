import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mi primera app';
  counter = 20;

  increaseBy(value:number):void{
    this.counter+=value;
  }

  reset():void{
    this.counter = 10;
  }

}


