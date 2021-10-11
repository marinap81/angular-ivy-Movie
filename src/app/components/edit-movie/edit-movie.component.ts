import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  movieId: string;
  movie: Movie;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.movieService.getMovieById(this.movieId).subscribe((data) => {
      this.movie = data;
      this.isLoading = false;
    });
  }

  handleSaveClick() {
    this.movieService
      .updateMovie(this.movie, this.movieId)
      .subscribe((data) => {
        console.log('Updated!!!');
        console.log(data);
      });
  }

  handleDeleteClick() {
    this.movieService.deleteMovie(this.movieId).subscribe((data) => {
      console.log('deleted!!!!!');
      console.log(data);
    });
  }
}
