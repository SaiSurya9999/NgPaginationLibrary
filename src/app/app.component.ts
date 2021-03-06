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
  itemsPerPage:any = 5;
  totalPage:any = 0;
  term:any = "";
  prop:any = "";
  pageTabs:boolean = true;

  stylingProps:any = {
    backgroundColor: "#fff",
    textColor: "blue",
    activeBackgroundColor: "green",
    activeTextColor: "#fff",
    onHoverBackgroundColor: "#e9ecef",
    onHoverTextColor: "#0056b3"
  };
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
