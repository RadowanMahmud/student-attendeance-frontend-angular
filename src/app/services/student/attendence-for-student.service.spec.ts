import { TestBed } from '@angular/core/testing';

import { AttendenceForStudentService } from './attendence-for-student.service';

describe('AttendenceForStudentService', () => {
  let service: AttendenceForStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendenceForStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
