import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttedenceComponent } from './add-attedence.component';

describe('AddAttedenceComponent', () => {
  let component: AddAttedenceComponent;
  let fixture: ComponentFixture<AddAttedenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAttedenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttedenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
