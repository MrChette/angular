

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/enviroments/environments.prod';

@Injectable({providedIn: 'root'})
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {
   }


  getHeroes():Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroesById( id : string) : Observable<Hero | undefined> {
    return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  getSuggestions( query : string):Observable<Hero[]>{
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=s${query}&limit=6`);
  }


  addHero(hero : Hero):Observable<Hero> {
    return this.http.post<Hero>(`${ this.baseUrl }/heroes`,hero);
  }

  updateHero(hero : Hero):Observable<Hero> {
    if( !hero.id ) throw Error('Hero id is required')
    return this.http.patch<Hero>(`${ this.baseUrl }/heroes/${hero.id}`,hero);
  }

  delHeroById(id : string):Observable<boolean> {
    return this.http.delete(`${ this.baseUrl }/heroes/${id}`)
      .pipe(
        map( resp => true ),
        catchError( error => of(false)),
      );
  }

}
