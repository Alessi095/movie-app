import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
import { MoviesDetail } from '../movies-detail';
import { Movies } from '../movies';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit{

  // @Input() idMovies: string;
  DetailUrl:string=this.route.snapshot.paramMap.get('Detail');
  moviesDetail:MoviesDetail;


  constructor(private MoviesService:MoviesServiceService,
    private route: ActivatedRoute,
    private location: Location) { }
  //prombela dettagglio 

  goBack(): void {
    this.location.back();
  }


  ngOnInit() {
    console.log(this.DetailUrl);
     this.getDetail(this.DetailUrl);
    // this.getDetail();

  }

  // ngOnChanges() {
  //   console.log(this.DetailUrl);
  //   if(this.DetailUrl) this.getDetail(this.DetailUrl);
      
  // }



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


