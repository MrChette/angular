import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaracterComponent } from './add-caracter.component';

describe('AddCaracterComponent', () => {
  let component: AddCaracterComponent;
  let fixture: ComponentFixture<AddCaracterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaracterComponent]
    });
    fixture = TestBed.createComponent(AddCaracterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
