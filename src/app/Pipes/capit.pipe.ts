import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capit'
})
export class CapitPipe implements PipeTransform {

  transform(content:String):String {
     return content.toLowerCase().split(" ").map(e => e[0].toUpperCase()+e.slice(1)).join(" ");
      
}

}