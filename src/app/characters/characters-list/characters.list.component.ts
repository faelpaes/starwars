import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../characters.service';
import { Characters } from '../characters';
import {CommonService} from '../../common/common.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.list.component.html',
  styleUrls: ['./characters.list.component.css']
})
export class CharactersListComponent implements OnInit {
  characters: Characters[];
  nextPage: String;
  backPage: String;

  constructor(
    private service: CharactersService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.service.getCharacters().subscribe(
      (characters) => {
        this.characters = characters['results'];
        this.nextPage = characters['next'];
      },
      (error: any) => {
        console.log('Error to access the API');
      }
    );
  }

  private getCharacterByPage(page): void {
    this.service.getCharactersByPage(page).subscribe(
      (characters) => {
        this.characters = characters['results'];
        this.backPage = characters['previous'];
        this.nextPage = characters['next'];
      },
      (error: any) => {
        console.log('Error to access the API');
      }
    );
  }

  private splitUrl(url: string) {
    return this.commonService.splitUrl(url, 'https://swapi.co/api/people/');
  }
}
