import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map ,Marker }from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

  @Input()
  lngLat?: [number, number];


  @ViewChild('map')
  public divMap?: ElementRef;

  public map?: Map;



  ngAfterViewInit(): void {
    if( !this.divMap ) throw 'Elemento HTML no encontrado';
    if( !this.lngLat ) throw 'No hay coordenadas'

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 16, // starting zoom
      interactive: false,
    });

    new Marker()
      .setLngLat( this.lngLat)
      .addTo(this.map)

  }

}
