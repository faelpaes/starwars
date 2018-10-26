import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlanetsService } from '../planets.service';
import { Planets } from '../planets';
import { Characters } from '../../characters/characters';
import { CharactersService } from '../../characters/characters.service';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html'
})
export class PlanetsDetailComponent implements OnInit {
  planets: Planets;
  residents: Characters[] = [];

  constructor(
    private router: Router,
    private service: PlanetsService,
    private characterService: CharactersService,
    private commonService: CommonService
  ) {
    this.planets = new Planets();
  }

  ngOnInit(): void {
    this.getPlanets();
  }

  private getPlanets(): void {
    const id = this.commonService.splitUrl(this.router.url, '/planets/');
    this.service.getPlanetsById(id).subscribe(item => {
      this.planets = item;
      if (this.planets['residents'] !== undefined && this.planets.residents.length !== 0) {
        this.planets['residents'].forEach(urlResidents => {
          const id = this.commonService.splitUrl(urlResidents, 'https://swapi.co/api/people');
          this.getResident(id.replace('/', ''));
        });
      } else {
        this.residents = null;
      }
    });
  }

  private getResident(idResident: string): void {
    this.residents = [];
    this.characterService.getCharacterById(idResident).subscribe(item => {
      this.residents.push(item);
    });
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/people/');
  }

}
