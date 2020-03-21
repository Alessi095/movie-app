import { Component, OnInit,Input } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { Movies } from '../movies';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  MoviesList:Movies[];
  idClicked:string;
  changeParameter:string;


  constructor(private MoviesService:MoviesServiceService,
              private route:ActivatedRoute) { }

  getMovies(parameterSerchh:string): void {
    this.MoviesService.getMovies(parameterSerchh)
        .subscribe(Movies => {
          console.log(Movies);
          this.MoviesList = Movies.Search
          });
  }

  onSelect(id:string):void{
    this.idClicked=id;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.changeParameter = params.get("wordSerch");
      this.getMovies(this.changeParameter);
    }); 
  }

}
