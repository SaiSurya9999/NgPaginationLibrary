# Ngconf-Pagination Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
> ![ngconf-pagination](https://img.icons8.com/flat_round/48/000000/wide-long-left-arrow.png "Prev Page")  1 of 5 ![ngconf-pagination](https://img.icons8.com/flat_round/48/000000/wide-long-right-arrow.png "Next Page") Pagination Feature with search functionality for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-pagination "ngconf-pagination Demo") 

## Step - 1

> npm i ngconf-pagination --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-pagination "ngconf-pagination")  

## Step - 2  
Import NgconfTaginputModule in app.module.ts file.  

**app.module.ts**
```typescript
import {NgconfPaginationModule} from 'ngconf-pagination';
 imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfPaginationModule,
    HttpClientModule
  ]
```

## Step - 3
This step is to quick start the usage of package later with the understanding of workflow you can  
modify the code. You can have a look in our stackbliz demo for more clarity. Json typicode dummy data api is used to show that this package can handle asynchronous data.
**app.component.ts**
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
```
**app.component.html**
```html
  <input type="text" [(ngModel)]="term" [value]="term" placeholder="Search">
  <br>
  <label class="mt-3" for="fill">Searh Based On:</label>
  <select class="ml-2" [(ngModel)]="prop" id="fill">
    <option  value="" selected>All</option>
    <option value="id">ID</option>
    <option value="name">Name</option>
    <option value="email">Email</option>
    <option value="body">Body</option>
  </select>
  <div class="table-responsive" *ngIf="tableArray.length > 0">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of tableArray  | paginator: { elementsPerPage: itemsPerPage, currentPage: currentPage,searchTerm: term, prop: prop  } " >
          <th scope="row">{{item.id}}</th>
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.body}}</td>
        </tr>
        
      </tbody>
    </table>
  </div>
<pagination-controls *ngIf="term == ''" (pageChange)="currentPage = $event" [controls]="{currentPage: currentPage,itemsPerPage: itemsPerPage,dataLength: tableArray.length  }"></pagination-controls>
```

## Explanation on Component Properties  
1 **(onTag)** event is triggered when user adds a tag returns whole tags array added that point of time.  
2 **[typeaheads]** if you want any typeahead suggestions to the user when adding tags then add those in a array and assign to this property.  
Module will automatically add filter to the array and give suggestions to the user.  
3 **[customStyles]** There are many styling changes you can do using this configuration property.  
4. **[allowed]** This property is usefull when you want user to enter only allowed tags. This can be left with an empty array if you dont want to use it.  
5. **(onFail)** This event is triggered when you use allowed tags feature when user tried to input wrong tag which is not present in allowed tags.  
Structure of the configuration interface for reference.
```typescript
export interface styleCustom{
  iconColor: String,
  iconSize: String,
  tagBackground: String,
  tagFont: String,
  tagSize: String,
  tagBox_Background: String,
  tagBox_minHeight: String,
  tagBox_Height: String,
  tagBox_Width:String,
  tag_InputColor: String,
  tag_InputPlaceholder: String
}
```

## Styling of Typeahead Suggestions  
(Styles can be overwritten based on your application theme)   
> Styles can be overwritten in global styles file in angular project.  
1. **typeahead** class is for parent div styling.  
2. **typeaheadul** class is for ul tag which is parent for li tag.
3. **typeaheadli** class is for li elements of suggestions.  

**styles.css or styles.scss**
```css
.typeaheadul{
  background: #cce5ff;
}
.typeaheadli{
  color: purple;
}
.typeahead{
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
      padding: 10px;
}
```
> That's it you are good to go. Happy Coding :)
