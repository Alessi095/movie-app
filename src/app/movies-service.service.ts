import { Injectable } from '@angular/core';
import { Moviess, MovieDetail } from './Mock-films';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movies } from './movies';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MoviesDetail } from './movies-detail';


@Injectable({
  providedIn: 'root'
})

export class MoviesServiceService {

  MoviesUrl="http://www.omdbapi.com/?apikey=c6549166&s=";
  MoviesUrlDetail="http://www.omdbapi.com/?apikey=c6549166&i=";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMovies(MovieSerch: string): Observable<any>{
    
      return this.http.get<any>(`${this.MoviesUrl}${MovieSerch}`)
        .pipe(
          tap(_ => console.log('fetched heroes')),
          catchError(this.handleError<any>('getMovies', [])
          )
        );
  }

  getDetail(id?: string): Observable<any>{

    const url=`${this.MoviesUrlDetail}${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError<any>('getMovies', )
    )
    );
    
  }

  

  constructor(private http: HttpClient) { }
  
}
