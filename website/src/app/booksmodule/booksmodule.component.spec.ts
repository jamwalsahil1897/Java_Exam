import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksmoduleComponent } from './booksmodule.component';

describe('BooksmoduleComponent', () => {
  let component: BooksmoduleComponent;
  let fixture: ComponentFixture<BooksmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
