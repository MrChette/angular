import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar</h5>
    <input type="text"
      class="form-control"
      placeholder="Buscar Gifs..."
      (keyup.enter)="searchTag()"
      #txtTagInput
      >
  `
})

export class SearchBoxComponent implements OnInit {

  @ViewChild('txtTagInput')
  public tagInput!:ElementRef<HTMLInputElement>;


  constructor() { }


  searchTag(){
    const newTag = this.tagInput.nativeElement.value;
    console.log({newTag});
  }

  ngOnInit() { }
}
