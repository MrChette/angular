
import { enviroments } from 'src/enviroments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';


@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = enviroments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser() : User | undefined {
    if( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  login( email: string, password: string):Observable<User> {
    //http.post('login',{email,password}) para un backend real
    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap( user => this.user = user),
        tap( user => localStorage.setItem('token', user.id.toString())),
      );
  }

  checkAuthenticationStatus():Observable<boolean> {
    if ( !localStorage.getItem('token') ) return of( false );

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseUrl }/user/1`)
      .pipe(
        tap( user => this.user = user ),
        map ( user => !!user ),
        catchError( err => of( false ))
      );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}
