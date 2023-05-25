import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []


  onDeleteCharacter(index:number):void{
    //TODO: Emitir ID PERSONAJE
    console.log({index});
  }

}
