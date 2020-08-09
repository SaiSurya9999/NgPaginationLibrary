import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfPaginationComponent } from './ngconf-pagination.component';

describe('NgconfPaginationComponent', () => {
  let component: NgconfPaginationComponent;
  let fixture: ComponentFixture<NgconfPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgconfPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
