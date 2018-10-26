import {Component, OnInit} from '@angular/core';
import {Starships} from '../starships';
import {Router} from '@angular/router';

import {StarshipsService} from '../starships.service';
import {Characters} from '../../characters/characters';
import {CommonService} from '../../common/common.service';


@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html'
})
export class StarshipsDetailComponent implements OnInit {
  starships: Starships;
  pilots: Characters[] = [];

  constructor(
    private router: Router,
    private service: StarshipsService,
    private commonService: CommonService
  ) {
    this.starships = new Starships();
  }

  ngOnInit(): void {
    this.getStarshipsRoute();
  }

  private getStarshipsRoute(): void {
    const id = this.commonService.splitUrl(this.router.url, '/starships/');
    this.service.getStarshipById(id).subscribe(item => {
      this.starships = item;

      if (this.starships['pilots'] !== undefined && this.starships.pilots.length !== 0) {
        this.starships['pilots'].forEach(urlPilots => {
          const id = this.commonService.splitUrl(urlPilots, 'https://swapi.co/api/people');
          this.getPilot(id.replace('/', ''));
        });
      } else {
        this.pilots = null;
      }
    });
  }

  private getPilot(idPilot: string): void {
    this.pilots = [];
    this.service.getStarshipPilots(idPilot).subscribe(item => {
      this.pilots.push(item);
    });
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/people/');
  }
}
