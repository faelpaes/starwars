import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(characters: any, order: any): any {

    if (characters !== undefined && order === undefined || order === '') {
      order = 'asc';
    }

    if (order !== undefined) {
      if (order === 'asc') {
        return characters.sort(
          (a: any, b: any) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
      } else if (order === 'desc') {
        return characters.sort(
          (a: any, b: any) => {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              return 0;
            }
          });
      }
    }

    return characters;
  }
}
