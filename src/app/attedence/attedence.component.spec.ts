import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttedenceComponent } from './attedence.component';

describe('AttedenceComponent', () => {
  let component: AttedenceComponent;
  let fixture: ComponentFixture<AttedenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttedenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttedenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
