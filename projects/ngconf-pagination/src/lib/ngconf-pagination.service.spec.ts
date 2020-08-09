import { TestBed } from '@angular/core/testing';

import { NgconfPaginationService } from './ngconf-pagination.service';

describe('NgconfPaginationService', () => {
  let service: NgconfPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgconfPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
