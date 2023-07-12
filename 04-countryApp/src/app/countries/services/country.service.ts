import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {


  private api_url:string ='https://restcountries.com/v3.1'

  public cacheStore: CacheStore = {
    byCapital:    {term: '', countries: []},
    byCountries:  {term: '', countries: []},
    byRegion:     {region: '', countries: []},
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountryRequest( url:string ): Observable<Country[]>{
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => of([])),
        delay(300)
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
    return this.getCountryRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = {term, countries}),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchCountry( term:string ): Observable<Country[]> {
    const url = `${this.api_url}/name/${term}`;
    return this.getCountryRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = {term, countries}),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchRegion( region:Region ): Observable<Country[]> {
    const url = `${this.api_url}/region/${region}`;
    return this.getCountryRequest(url)
    .pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries}),
      tap( () => this.saveToLocalStorage() )
    );
  }
}
