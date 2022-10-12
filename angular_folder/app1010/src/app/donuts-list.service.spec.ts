import { TestBed } from '@angular/core/testing';

import { DonutsListService } from './donuts-list.service';

describe('DonutsListService', () => {
  let service: DonutsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
