import { TestBed } from '@angular/core/testing';

import { AttendenceForAdminService } from './attendence-for-admin.service';

describe('AttendenceForAdminService', () => {
  let service: AttendenceForAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceForAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
