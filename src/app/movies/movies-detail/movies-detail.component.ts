import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonService } from '../../common/common.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html'
})
export class MoviesDetailComponent implements OnInit {
  title: String;
  opening_crawl: String;

  constructor(
    private router: Router,
    private service: MoviesService,
    private commonService: CommonService
  ) {
    this.title = '';
    this.opening_crawl = '';
  }

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie(): void {
    const id = this.commonService.splitUrl(this.router.url, '/films/');
    this.service.getMoviesById(id).subscribe(item => {
      this.title = item.title;
      this.opening_crawl = item.opening_crawl;
    });
  }
}
