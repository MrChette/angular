import { Component, ElementRef, ViewChild } from '@angular/core';

import { LngLat, Map, Marker }from 'mapbox-gl';


interface MarkerInterface {
  color: string;
  marker: Marker;
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent {

  @ViewChild('map')
  public divMap?: ElementRef;

  public markers: MarkerInterface[] = [];

  public map?: Map;
  public currentCenter: LngLat = new LngLat(-6.12177501201208, 36.68872343482218);

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'Elemento HTML no encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    /**
    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Chette'

    const marker = new Marker({
      //color: 'red'
      element: markerHtml
    })
      .setLngLat( this.currentCenter )
      .addTo ( this.map )
      **/

  }

  createMarker(){
    if( !this.map ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker( lngLat, color );
  }


  addMarker( lngLat: LngLat, color: string ) {
    if( !this.map ) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat( lngLat )
      .addTo( this.map );

    this.markers.push({
      color: color,
      marker: marker
    });
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index,1  );
  }

  flyTo( marker: MarkerInterface ) {
    this.map?.flyTo({
      zoom:12,
      center: marker.marker.getLngLat(),
    })
  }


}
