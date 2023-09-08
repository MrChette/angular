import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if( !navigator.geolocation ){
  alert('No location provide');
  throw new Error('No location provide');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
