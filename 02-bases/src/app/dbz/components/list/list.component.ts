import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDeleteId : EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void{


    if( !id ) return
    console.log(id);
    this.onDeleteId.emit(id);
  }

}
