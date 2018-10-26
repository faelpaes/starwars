import { Injectable } from '@angular/core';
import { arrQuotes } from './quotes.list';

@Injectable()
export class CommonService {
  value: any;

  constructor() { }

  splitUrl(url: string, urlReplace: string) {
    const value = url.replace(urlReplace, '').replace('/', '');
    return value;
  }

  generateRandom(): any {
    this.value = this.getRandomInt(1, arrQuotes.length);
    return arrQuotes[this.value];
  }

  private getRandomInt(min, max): any {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
