import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingmoduleComponent } from './shoppingmodule.component';

describe('ShoppingmoduleComponent', () => {
  let component: ShoppingmoduleComponent;
  let fixture: ComponentFixture<ShoppingmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
