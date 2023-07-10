import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private api_url:string ='https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  private getCountryRequest( url:string ): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),
        delay(2000)
      );
  }


  searchContryByAlphaCode(code: string): Observable<Country | null>{
    const url = `${this.api_url}/alpha/${code}`;

    return this.http.get<Country[]>(url)
      .pipe(
        map(countries => countries.length>0 ? countries[0]:null),
        catchError(error => of(null))
      );
  }


  searchCapital( term:string ): Observable<Country[]> {
    const url = `${this.api_url}/capital/${term}`;
    return this.getCountryRequest(url);
  }

  searchCountry( term:string ): Observable<Country[]> {
    const url = `${this.api_url}/name/${term}`;
    return this.getCountryRequest(url)
  }

  searchRegion( term:string ): Observable<Country[]> {
    const url = `${this.api_url}/region/${term}`;
    return this.getCountryRequest(url)
  }
}
