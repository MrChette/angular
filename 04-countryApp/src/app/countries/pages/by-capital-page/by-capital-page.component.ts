import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService:CountryService) {}


  searchByCapital( term:string ){
    this.countriesService.searchCapital(term).subscribe(countries => this.countries = countries);
  }

}
