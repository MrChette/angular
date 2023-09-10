import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldHRlIiwiYSI6ImNsbHF5aGQ1NjAyMWUzam9oYzBqemduaG8ifQ.0SJkKASotyU_imrSm9mJZg';

if( !navigator.geolocation ){
  alert('No location provide');
  throw new Error('No location provide');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
