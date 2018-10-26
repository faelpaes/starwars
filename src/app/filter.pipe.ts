import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
@Injectable()
export class FilterPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    if (filter === undefined || filter === '') {
      return items;
    } else {
      return items.filter(
        item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
    }
  }
}
