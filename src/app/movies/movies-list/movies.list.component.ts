import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../common/common.service';
import {MoviesService} from '../movies.service';
import {Movies} from '../movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'movies.list.component.html'
})

export class MoviesListComponent implements OnInit {
  movies: Movies[];

  constructor(
    private service: MoviesService,
    private commonService: CommonService
  ) {
  }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(): void {
    this.service.getMovies().subscribe(
      (movies) => {
        this.movies = movies['results'];
      },
      (error: any) => {
        console.log('Error to access the API');
      }
    );
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/films/');
  }
}
