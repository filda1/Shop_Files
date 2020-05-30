import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  // arg == palabra a buscar, value== LisTa de productos
  transform(value: any, arg: any): any {
    //if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];
    for (const product of value) {
      if (product.product.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(product);
      };
       console.log(arg);
    };
    return resultPosts;
  }

}
