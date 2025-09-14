import { TestBed } from '@angular/core/testing';

import { AddDbDataService } from './add-db-data.service';

describe('AddDbDataService', () => {
  let service: AddDbDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDbDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
