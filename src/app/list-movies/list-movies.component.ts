import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { Movies } from '../movies';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  MoviesList:Movies[];

  constructor(private MoviesService:MoviesServiceService) { }

  getMovies(): void {
    this.MoviesService.getMovies()
        .subscribe(Movies => this.MoviesList = Movies);
  }

  ngOnInit() {
    this.getMovies();
  }

}
