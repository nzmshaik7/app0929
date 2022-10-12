import { TestBed } from '@angular/core/testing';

import { DonutItemService } from './donut-item.service';

describe('DonutItemService', () => {
  let service: DonutItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
