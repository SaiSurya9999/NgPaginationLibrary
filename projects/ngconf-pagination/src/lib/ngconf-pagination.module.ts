import { NgModule } from '@angular/core';
import { NgconfPaginationComponent } from './ngconf-pagination.component';
import { PageControlsComponent } from './page-controls/page-controls.component';
import { PaginatorPipe } from './paginator.pipe';

 

@NgModule({
  declarations: [NgconfPaginationComponent, PageControlsComponent, PaginatorPipe],
  imports: [
  ],
  exports: [NgconfPaginationComponent, PageControlsComponent, PaginatorPipe]
})
export class NgconfPaginationModule { }
