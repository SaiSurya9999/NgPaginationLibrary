import { Pipe, PipeTransform } from '@angular/core';

//Configuration for Pipe Input Args
export interface option {
  elementsPerPage: Number;
  currentPage: Number;
  searchTerm: String;
  prop: String;
}

@Pipe({
  name: 'paginator',
  pure: false
})
export class PaginatorPipe implements PipeTransform {

  transform(value: Array<any>, opt?: option): any {
    if(opt.searchTerm == ""){
      return this.dividePagesBeta(value,opt);
    }else{
      if (opt.prop) {
        if (opt.prop.toString() != "") {
          let result = value.map(a => a[opt.prop.toString()]);
          //Filtered Results based on Search Term
          return value.filter(function (item) {
            return JSON.stringify(item[opt.prop.toString()]).toLowerCase().includes(opt.searchTerm.toString());
          });
        }
      } else {
        //Filtered Results based on Search Term
        return value.filter(function (item) {
          return JSON.stringify(item).toLowerCase().includes(opt.searchTerm.toString());
        });
      }
    }
    
   
  }

  dividePagesBeta(value:Array<any>,opt:option): Array<any>{
    let items:any = Number(opt.elementsPerPage);
    let page:any =  Number(opt.currentPage);
    page--;
    let startIndex:any = 0;
    startIndex = (page * items);
    let endIndex:any = (startIndex + items) - 1;
   // console.log(startIndex,endIndex);
    let output:Array<any> = [];
     for(let i=0; i<value.length; i++){
        if(i>=startIndex && i<=endIndex){
          output.push(value[i]); 
        }
     }
     return output;
    }


}
