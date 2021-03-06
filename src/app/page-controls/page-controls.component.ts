import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

export interface opt {
  currentPage: any;
  itemsPerPage: any;
  dataLength: any;
  pageTabs: boolean
}

@Component({
  selector: 'pagination-controls',
  templateUrl: './page-controls.component.html',
  styleUrls: ['./page-controls.component.scss']
})
export class PageControlsComponent implements OnInit, OnChanges {

  @Input() controls: opt;
  @Input() stlyling: stylingProps = {
    backgroundColor: "#fff",
    textColor: "#007bff",
    activeBackgroundColor: "#007bff",
    activeTextColor: "#fff",
    onHoverBackgroundColor: "#e9ecef",
    onHoverTextColor: "#0056b3"
  };
  @Output() pageChange = new EventEmitter<any>();

  totalPage: any = 0;
  pageTabArray: Array<any> = [];
  liStyle: any = {
    "color": "#007bff",
    "background-color": "#fff"
  };
  activePage: any = 0;

  constructor() {
    this.liStyle.color = this.stlyling.textColor;
    this.liStyle["background-color"] = this.stlyling.backgroundColor;
  }

  ngOnInit(): void {
    this.totalPages();
    this.pageTabs();

  }

  navigateTo(pageIndex) {
    this.pageChange.emit(pageIndex);
    this.activePageStyle(this.activePage, (pageIndex - 1)); // Applying active state color
  }

  nextPage() {
    if ((this.controls.currentPage + 1) <= this.totalPage) {
      this.pageChange.emit(this.controls.currentPage + 1);
    }
  }
  prevPage() {
    if ((this.controls.currentPage - 1) > 0) {
      this.pageChange.emit(this.controls.currentPage - 1);
    }
  }
  totalPages() {
    this.totalPage = Math.ceil((this.controls.dataLength / this.controls.itemsPerPage));
  }

  pageTabs() {
    this.pageTabArray = []; // Clearing the page links for caluculation
    // Pushing the page numbers into the array
    for (let k = 1; k <= this.totalPage; k++) {
      this.pageTabArray.push({
        pageNumber: k,
        isEnable: false,
        style: { ...this.liStyle, }
      });

    }
    // Based on the current page we have filter the Page links instead of showing all the pages available   
    let currentPageIndex = (this.controls.currentPage - 1);
    let k = currentPageIndex;
    // Enable or disable page links based on the position of link to the current page    
    while (k != -1) {
      let count = 0;
      // Previous three available page links before current page      
      if (this.pageTabArray[k]) {
        if (k != currentPageIndex) {
          if (k == (currentPageIndex - 1) || k == (currentPageIndex - 2) || k == (currentPageIndex - 3)) {
            this.pageTabArray[k].isEnable = true;
            count++;
            if (count == 3) {
              // This IF clause will only pass maximum 3 times so to reduce computation break is used            
              break
            }
          }
        }
      }
      k--;
    }

    for (let k = currentPageIndex; k < (currentPageIndex + 4); k++) {
      // Next three available page links after current page
      if (this.pageTabArray[k]) {
        this.pageTabArray[k].isEnable = true;
      }
    }
    // To handle active state styling on page tab array refresh
    if (this.pageTabArray.length > 0) {
      this.pageTabArray[this.controls.currentPage - 1].style.backgroundColor = this.stlyling.activeBackgroundColor;
      this.pageTabArray[this.controls.currentPage - 1].style.color = this.stlyling.activeTextColor;
    }
  }

  hoverControl(ev, isActive = false) {
    if (!isActive) {
      switch (ev.type) {
        case "mouseover":
          if (document.getElementById(ev.toElement.id) != null) {
            document.getElementById(ev.toElement.id).style.backgroundColor = this.stlyling.onHoverBackgroundColor;
            document.getElementById(ev.toElement.id).style.color = this.stlyling.onHoverTextColor;
          }
          break;
        case "mouseleave":
          if (document.getElementById(ev.fromElement.id) != null) {
            document.getElementById(ev.fromElement.id).style.backgroundColor = this.stlyling.backgroundColor;
            document.getElementById(ev.fromElement.id).style.color = this.stlyling.textColor;
          }
          break;
      }
    }
  }

  activePageStyle(prev, current) {
    this.pageTabArray[prev].style.backgroundColor = this.stlyling.backgroundColor;
    this.pageTabArray[prev].style.color = this.stlyling.textColor;

    this.pageTabArray[current].style.backgroundColor = this.stlyling.activeBackgroundColor;
    this.pageTabArray[current].style.color = this.stlyling.activeTextColor;
    // prev = "index"+prev;
    // current = "index"+current;
    // console.log(prev+" || "+current);
    // if (document.getElementById(prev) != null) {
    //   document.getElementById(prev).style.backgroundColor = this.stlyling.backgroundColor;
    //   document.getElementById(prev).style.color = this.stlyling.textColor;
    // }
    // if (document.getElementById(current) != null) {
    //   document.getElementById(current).style.backgroundColor = this.stlyling.activeBackgroundColor;
    //   document.getElementById(current).style.color = this.stlyling.activeTextColor;
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPages();
    this.pageTabs();
  }
}


export interface stylingProps {
  backgroundColor: string,
  textColor: string,
  activeBackgroundColor: string,
  activeTextColor: string,
  onHoverBackgroundColor: string,
  onHoverTextColor: string
}