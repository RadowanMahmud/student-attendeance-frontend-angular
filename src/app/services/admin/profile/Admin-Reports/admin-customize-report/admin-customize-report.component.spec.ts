import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomizeReportComponent } from './admin-customize-report.component';

describe('AdminCustomizeReportComponent', () => {
  let component: AdminCustomizeReportComponent;
  let fixture: ComponentFixture<AdminCustomizeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomizeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomizeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
