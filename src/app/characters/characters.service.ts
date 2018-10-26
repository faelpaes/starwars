import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Characters } from './characters';
import {Species} from './species';

@Injectable()
export class CharactersService {
  private url = 'https://swapi.co/api/people/';
  private urlSpecies = 'https://swapi.co/api/species/';

  constructor(
    protected httpClient: HttpClient,
  ) {}

  getCharacters(): Observable<Characters[]> {
    return this.httpClient.get<Array<Characters>>(this.url);
  }

  getCharactersByPage(page: string): Observable<Characters> {
    return this.httpClient.get<Characters>(page);
  }

  getCharacterById(id: string): Observable<Characters> {
    return this.httpClient.get<Characters>(this.url + id);
  }

  getCharactersSpecies(id: string): Observable<Species> {
    return this.httpClient.get<Species>(this.urlSpecies + id);
  }
}
