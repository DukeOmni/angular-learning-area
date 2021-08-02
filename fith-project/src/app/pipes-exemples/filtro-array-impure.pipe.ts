import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpure',
  pure: false
})
export class FiltroArrayImpurePipe implements PipeTransform {

  transform(value: any[], input: String): any {
    if (value.length === 0 || input === undefined){
      console.log(value)
      console.log(input)
      return value;
    }

    let filter = input.toLocaleLowerCase() ;
    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
