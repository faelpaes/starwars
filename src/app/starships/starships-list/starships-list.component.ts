import {Component, OnInit} from '@angular/core';

import {StarshipsService} from '../starships.service';
import {Starships} from '../starships';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: 'starships-list.component.html'
})

export class StarshipsListComponent implements OnInit {
  starships: Starships[];
  nextPage: String;
  backPage: String;

  constructor(
    private service: StarshipsService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getStarships();
  }

  private getStarships(): void {
    this.service.getStarships().subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Error to access the API');
      }
    );
  }
  private getStarshipByPage(page): void {
    this.service.getStarshipByPage(page).subscribe(
      (starships) => {
        this.starships = starships['results'];
        this.backPage = starships['previous'];
        this.nextPage = starships['next'];
      },
      (error: any) => {
        console.log('Error to acess the API');
      }
    );
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/starships/');
  }
}
