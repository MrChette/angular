import { Component } from '@angular/core';
import { Region } from '../../interfaces/region';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries : Country[] = [];

  constructor(private countriesService:CountryService) {}

  searchByCountry( term:string ){
    this.countriesService.searchCountry(term).subscribe(countries => this.countries = countries);
  }

}
