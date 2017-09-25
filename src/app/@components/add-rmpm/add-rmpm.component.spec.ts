import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRmpmComponent } from './add-rmpm.component';

describe('AddRmpmComponent', () => {
  let component: AddRmpmComponent;
  let fixture: ComponentFixture<AddRmpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRmpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRmpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
