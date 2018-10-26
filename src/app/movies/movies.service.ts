import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movies } from './movies';

@Injectable()
export class MoviesService {

  private url = 'https://swapi.co/api/films/';

  constructor(
    protected httpClient: HttpClient,
  ) {
  }

  getMovies(): Observable<Movies[]> {
    return this.httpClient.get<Array<Movies>>(this.url);
  }

  getMoviesById(id: string): Observable<Movies> {
    return this.httpClient.get<Movies>(this.url + id);
  }
}
