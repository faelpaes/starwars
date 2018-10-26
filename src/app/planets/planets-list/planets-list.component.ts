import { Component, OnInit } from '@angular/core';

import { Planets } from '../planets';
import { PlanetsService } from '../planets.service';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: 'planets-list.component.html'
})

export class PlanetsListComponent implements OnInit {
  planets: Planets[];
  nextPage: String;
  backPage: String;

  constructor(
    private service: PlanetsService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.service.getPlanets().subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Error to access the API');
      }
    );
  }

  private getPlanetsByPage(page): void {
    this.service.getPlanetsByPage(page).subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.backPage = planets['previous'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Error to acess the API');
      }
    );
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/planets/');
  }



}
