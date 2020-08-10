# Ngconf-TagInput Library

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.
> ![ngconf-pagination](https://img.icons8.com/flat_round/48/000000/wide-long-left-arrow.png "Prev Page")  1 of 5 ![ngconf-pagination](https://img.icons8.com/flat_round/48/000000/wide-long-right-arrow.png "Next Page") Pagination Feature for Angular.  


### Demo Link   
[Stackblitz Demo](https://stackblitz.com/edit/ngconf-taginput "ngconf-taginput Demo") 

## Step - 1

> npm i ngconf-taginput --save  
[NPM Package Link](https://www.npmjs.com/package/ngconf-taginput "ngconf-taginput")  

## Step - 2  
Import NgconfTaginputModule in app.module.ts file.  

**app.module.ts**
```typescript
import {NgconfTaginputModule} from 'ngconf-taginput';
 imports: [
    BrowserModule,
    AppRoutingModule,
    NgconfTaginputModule
  ]
```

## Step - 3
This step is to quick start the usage of package later with the understanding of workflow you can  
modify the code.  
**app.component.ts**
 ```typescript
  customStyles = {
    iconColor: "",
    iconSize: "",
    tagBackground: "",
    tagFont: "",
    tagSize: "",
    tagBox_minHeight: "",
    tagBox_Height: "",
    tagBox_Width: "",
    tagBox_Background: "",
    tag_InputColor: "",
    tag_InputPlaceholder: "Favourites"
  };
  typeaheads:any = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa'
  ]
  allowedTags =  [];
  
  tagInput(tags){
    console.log(tags);
  }
  onFail(msg){
    alert(msg);
  }
```
**app.component.html**
```html
<ngconf-taginput (onTag)="tagInput($event)" [customStyles]="customStyles" [typeaheads]="typeaheads" [allowed]="allowedTags" (onFail)="onFail($event)">
</ngconf-taginput>
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
