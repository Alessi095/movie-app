import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { TitleComponent } from './title/title.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ActivatedRoute, Router } from '@angular/router';


const routes: Routes = [
  { path:'' , component: SearchFormComponent },
  { path: 'listMovies/:wordSerch', component: ListMoviesComponent },
  { path: 'listMovies/:wordSerch/DetailMovie/:Detail', component: DetailMovieComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }