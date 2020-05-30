import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectpaymentComponent } from './selectpayment.component';

describe('SelectpaymentComponent', () => {
  let component: SelectpaymentComponent;
  let fixture: ComponentFixture<SelectpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
