import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductsSliderComponent } from './home-products-slider.component';

describe('HomeProductsSliderComponent', () => {
  let component: HomeProductsSliderComponent;
  let fixture: ComponentFixture<HomeProductsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProductsSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
