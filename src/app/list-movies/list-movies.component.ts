import { Component, OnInit,Input } from '@angular/core';
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
  @Input() parameterSerchh:string;

  constructor(private MoviesService:MoviesServiceService) { }

  getMovies(parameterSerchh): void {
    this.MoviesService.getMovies(parameterSerchh)
        .subscribe(Movies => {
          console.log(Movies);
          this.MoviesList = Movies.Search
          });
  }

  onSelect(id:string):void{
    this.idClicked=id;
  }

  ngOnChanges() {
    console.log(this.parameterSerchh);
    if(this.parameterSerchh) this.getMovies(this.parameterSerchh);
      
  }

  ngOnInit() {
    
  }

}
