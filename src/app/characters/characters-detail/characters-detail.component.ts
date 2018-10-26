import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Characters} from '../characters';
import {CharactersService} from '../characters.service';
import {Species} from '../species';
import {Planets} from '../../planets/planets';
import {PlanetsService} from '../../planets/planets.service';
import {MoviesService} from '../../movies/movies.service';
import {Movies} from '../../movies/movies';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {
  character: Characters;
  species: Species[] = [];
  planet: Planets;
  movies: Movies[] = [];
  test: string;

  constructor(
    private router: Router,
    private service: CharactersService,
    private planetService: PlanetsService,
    private movieService: MoviesService,
    private commonService: CommonService
  ) {
    this.test = 'fa fa-android';
  }

  ngOnInit () {
    this.character = new Characters();
    this.getCharacterRoute();
  }

  private getCharacterRoute(): void {
    const id = this.commonService.splitUrl(this.router.url, '/characters/');
    this.service.getCharacterById(id).subscribe(item => {
      this.character = item;

      this.character['films'].forEach(urlFilms => {
        const idFilm = this.commonService.splitUrl(urlFilms, 'https://swapi.co/api/films');
        this.getMovies(idFilm.replace('/', ''));
      });

      this.character['species'].forEach(urlSpecie => {
        const id = this.commonService.splitUrl(urlSpecie, 'https://swapi.co/api/species');
        this.getSpecies(id.replace('/', ''));
      });
    });
  }

  private getSpecies(idSpecies: string): void {
    this.species = [];
    const id = this.commonService.splitUrl(idSpecies, '/species/');
    this.service.getCharactersSpecies(id).subscribe(item => {
      this.species.push(item);
      this.getPlanets(this.character['homeworld']);
    });
  }

  private getPlanets(urlPlanet: any): void {
    const id = this.commonService.splitUrl(urlPlanet, 'https://swapi.co/api/planets/');
    this.planetService.getPlanetsById(id).subscribe(item => {
      this.planet = item;
    });
  }

  private splitUrl(url: string, urlReplace: string) {
    return this.commonService.splitUrl(url, urlReplace);
  }

  private getMovies(url: string) {
    const id = this.commonService.splitUrl(url, 'https://swapi.co/api/films/');
    this.movieService.getMoviesById(id).subscribe(
      item => {
        this.movies.push(item);
      }
    );
  }

  private getClass() {
    return '<i class="fa fa-android"></i>';
  }
}
