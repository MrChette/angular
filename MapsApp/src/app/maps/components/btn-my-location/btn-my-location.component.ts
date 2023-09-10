import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private mapService: MapService,
    private placesService: PlacesService,
  ) {}

  goToMiLocation(){
    if( !this.placesService.isUserLocationReady ) throw Error('No hay ubicacion')
    if( !this.mapService.isMapReady ) throw Error('No hay mapa')


    this.mapService.flyTo( this.placesService.userLocation! )
  }

}
