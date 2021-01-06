import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesBottomComponent } from './categories-bottom.component';

describe('CategoriesBottomComponent', () => {
  let component: CategoriesBottomComponent;
  let fixture: ComponentFixture<CategoriesBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
