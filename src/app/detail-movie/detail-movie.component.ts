import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { MoviesDetail } from '../movies-detail';
import { Movies } from '../movies';



@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit, OnChanges {

  @Input() idMovies: string;
  moviesDetail:MoviesDetail;

  constructor(private MoviesService:MoviesServiceService) { }
  //prombela dettagglio 
  ngOnInit() {
    console.log(this.idMovies);
    // this.getDetail();

  }

  ngOnChanges() {
    console.log(this.idMovies);
    if(this.idMovies) this.getDetail(this.idMovies);
      
  }



  getDetail(chenges:string){
    this.MoviesService.getDetail(chenges).subscribe(movieDetail => {
      console.log("funziona" +movieDetail)
      this.moviesDetail=movieDetail;
    });
   }
  }

  // getDetail(){
  //   if(this.idMovies.length===undefined){
  //     this.idMovies="";
  //   }
  //   else{
  //   this.MoviesService.getDetail(this.idMovies).subscribe(movieDetail => {
  //     console.log("funziona" +movieDetail)
  //     this.MoviesDetail=movieDetail.Search;
  //   });
  //  }
  // }


