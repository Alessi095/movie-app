import { Injectable } from '@angular/core';
import { Moviess } from './Mock-films';
import { Movies } from './movies';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class MoviesServiceService {

  getMovies(): Observable<Movies[]>{
    return of(Moviess);
  }

  

  constructor() { }
  
}
