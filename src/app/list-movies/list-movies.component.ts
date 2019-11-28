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
  idClicked:string;
  

  constructor(private MoviesService:MoviesServiceService) { }

  getMovies(): void {
    this.MoviesService.getMovies("terminator")
        .subscribe(Movies => {
          console.log(Movies);
          this.MoviesList = Movies.Search
          });
  }

  onSelect(id:string):void{
    this.idClicked=id;
  }

  ngOnInit() {
    this.getMovies();
  }

}
