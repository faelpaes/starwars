import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Planets} from './planets';

@Injectable()
export class PlanetsService {

  private url = 'https://swapi.co/api/planets/';

  constructor(
    protected httpClient: HttpClient,
  ) {}

  getPlanets(): Observable<Planets[]> {
    return this.httpClient.get<Array<Planets>>(this.url);
  }

  getPlanetsById(id: string): Observable<Planets> {
    return this.httpClient.get<Planets>(this.url + id);
  }

  getPlanetsByPage(page: string): Observable<Planets> {
    return this.httpClient.get<Planets>(page);
  }
}
