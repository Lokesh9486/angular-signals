import { Pipe, PipeTransform } from '@angular/core';
import { employeType } from '../screens/employee/employee.component';

@Pipe({
  name: 'pagination',
  standalone: true
})
export class PaginationPipe implements PipeTransform {

  transform(value: employeType[], currentPage:number,perPage:number):employeType[]  {
    console.log(currentPage)
    const calc=currentPage*perPage
    return value.slice(calc-perPage,calc);
  }

}
