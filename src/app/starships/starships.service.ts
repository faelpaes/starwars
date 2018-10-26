import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Starships} from './starships';
import {Characters} from '../characters/characters';

@Injectable()
export class StarshipsService {

  private url = 'https://swapi.co/api/starships/';
  private urlPilots = 'https://swapi.co/api/people/';

  constructor(
    protected httpClient: HttpClient,
  ) {}

  getStarships(): Observable<Starships[]> {
    return this.httpClient.get<Array<Starships>>(this.url);
  }

  getStarshipById(id: string): Observable<Starships> {
    return this.httpClient.get<Starships>(this.url + id);
  }


  getStarshipByPage(page: string): Observable<Starships> {
    return this.httpClient.get<Starships>(page);
  }

  getStarshipPilots(id: string): Observable<Characters> {
    return this.httpClient.get<Characters>(this.urlPilots + id);
  }
}
