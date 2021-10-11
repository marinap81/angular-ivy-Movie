import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
