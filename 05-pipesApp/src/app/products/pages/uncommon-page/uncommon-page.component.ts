import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string= 'Nacho';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla',
  }

  changeClient():void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Maria','Jose','Paco','Pepe','Inventor']
  public clientsMap = {
    '=0':'no hay clientes',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }


  deleteClient():void{
    this.clients.shift();
  }

  //KeyValuePipe
  public person = {
    name:'Fernando',
    age:36,
    address:'Ottawa, Canada'
  }

  //Async Pipe
  public myObservableTimer = interval (2000)
    .pipe(
      tap(value => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise ( (resolve,reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
    },3500);
  })



}
