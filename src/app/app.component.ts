import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tableArray:Array<any> = [];
  currentPage:any = 1;
  itemsPerPage:any = 10;
  totalPage:any = 0;
  term:any = "";
  prop:any = "";
  constructor(private http: HttpClient){

  } 
  ngOnInit(){
  this.http.get("https://jsonplaceholder.typicode.com/comments")
  .subscribe(res => {
     let temp:any = res;
     this.tableArray = temp;
  });
    
  }

  
}
