import { TestBed } from '@angular/core/testing';

import { StudentforadminService } from './studentforadmin.service';

describe('StudentforadminService', () => {
  let service: StudentforadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentforadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
