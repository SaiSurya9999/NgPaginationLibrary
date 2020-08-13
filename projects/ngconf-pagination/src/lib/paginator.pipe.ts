import { Pipe, PipeTransform } from '@angular/core';

//Configuration for Pipe Input Args
export interface opt {
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

  transform(value: Array<any>, opt?: opt): any {
  //  console.log(value.length);
 //   console.log(opt);
    if(opt.searchTerm == ""){
      return this.dividePagesalpha(value,opt);
    }else{
      if (opt.prop) {
        if (opt.prop.toString() != "") {
          let result = value.map(a => a[opt.prop.toString()]);
          //Filtered Results based on Search Term
          return value.filter(function (item) {
            // console.log(item);
            return JSON.stringify(item[opt.prop.toString()]).toLowerCase().includes(opt.searchTerm.toString());
          });
        }
      } else {
        //Filtered Results based on Search Term
        return value.filter(function (item) {
          // console.log(item);
          return JSON.stringify(item).toLowerCase().includes(opt.searchTerm.toString());
        });
      }
    }
    
   
  }
  dividePagesalpha(value:Array<any>,opt:opt): Array<any>{
    let items:any = opt.elementsPerPage;
    let page:any = opt.currentPage;
    page--;
    let startIndex:any = 0;
    startIndex = (page * items);
    let endIndex:any = (startIndex + items) - 1;
    let output:Array<any> = [];
     for(let i=0; i<value.length; i++){
        if(i>=startIndex && i<=endIndex){
       
          output.push(value[i]); 
        }
        
     }
     return output;
    }
  dividePagesBeta(value:Array<any>,opt:opt): Array<any>{
    let items:any = opt.elementsPerPage;
    let page:any = opt.currentPage;
    page--;
    let startIndex:any = 0;
    startIndex = (page * items);
    let endIndex:any = (startIndex + items) - 1;
    let output:Array<any> = [];
   // console.log(startIndex+" || "+endIndex);
     for(let i=0; i<(value.length - 1); i++){
        if(i<startIndex || i>endIndex){
        
        }else{
          output.push(value[i]); 
        }
        
     }
     return output;
    }

  dividePages(value:Array<any>,opt:opt): Array<any>{
    let items:any = opt.elementsPerPage;
    let page:any = opt.currentPage;
    page--;
    let startIndex:any = 0;
    startIndex = (page * items);
    let endIndex:any = (startIndex + items) - 1;
    let output:Array<any> = [];
   // console.log(startIndex+" || "+endIndex);
     for(let i=(value.length - 1); i>=0; i--){
        if(i<startIndex || i>endIndex){
        
        }else{
          output.push(value[i]); 
        }
        
     }
     return output;
    }
}
