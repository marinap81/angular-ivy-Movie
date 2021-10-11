import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl: string = 'https://613d68c694dbd600172ab8c6.mockapi.io';

  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<Movie[]>(`${this.apiUrl}/movies`);
  }

  getMovieById(movieId: string) {
    return this.http.get<Movie>(`${this.apiUrl}/movies/${movieId}`);
  }

  updateMovie(updatedMovie: Movie, movieId: string) {
    return this.http.put<Movie>(
      `${this.apiUrl}/movies/${movieId}`,
      updatedMovie
    );
  }

  deleteMovie(movieId: string) {
    return this.http.delete<Movie>(`${this.apiUrl}/movies/${movieId}`);
  }
}
