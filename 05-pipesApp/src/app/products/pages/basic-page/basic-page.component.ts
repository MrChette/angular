import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'nacho';
  public nameUpper: string = 'NACHO';
  public fullName: string = 'nACho fraNCo';
  public customDate: Date = new Date();

}
