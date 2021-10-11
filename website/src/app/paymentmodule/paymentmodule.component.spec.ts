import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentmoduleComponent } from './paymentmodule.component';

describe('PaymentmoduleComponent', () => {
  let component: PaymentmoduleComponent;
  let fixture: ComponentFixture<PaymentmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
