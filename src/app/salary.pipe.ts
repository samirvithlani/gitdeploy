import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, arg1?: string, arg2?: string): string {

    var separator = ",";
    var symbol = "₹"

    if (arg1! = undefined) {

      separator = arg1[0];
    }
    if (arg2 != undefined) {

      switch (arg2) {

        case "INR":
          symbol = "₹"
          break;
        case "US":
          symbol = "$";
          break;
          case "EUR":
          symbol="€";
          break;

      }

      var formatedValue = "";

      if (value.length > 3) {

        //500,000
        formatedValue = separator + value.slice(length - 3);
        value = value.slice(0, length - 3);
      }
      while (value.lenght > 0) {

        formatedValue = separator + value.slice(value.lenght - 2) + formatedValue;
        value = value.slice(0, value.lenght - 2)
      }
      formatedValue = value + formatedValue;



    }


    return formatedValue + symbol;
  }

}
