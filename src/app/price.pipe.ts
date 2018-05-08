import { Pipe, PipeTransform } from '@angular/core';
import { AlbumService } from './album.service'

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  albums: FirebaseListObservable<any[]>
  transform(input: albums, desiredPrice) {
    let output: Album[] = [];
    if(desiredPrice === "1") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].price <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredPrice === "2") {
      for (let i = 0; i < input.length; i++){
        if (input[i].price > 10 && input[i].price <= 20) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "3") {
      for (let i = 0; i < input.length; i++){
        if (input[i].price > 20 && input[i].price <= 30) {
        output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "4") {
      for (let i = 0; i < input.length; i++){
        if (input[i].price > 30) {
        output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
