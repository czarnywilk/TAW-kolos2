import { TestBed } from '@angular/core/testing';

import { ATDataService } from './AT-data.service';

describe('DataService', () => {
  let service: ATDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ATDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
