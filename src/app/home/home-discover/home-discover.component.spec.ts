import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiscoverComponent } from './home-discover.component';

describe('HomeDiscoverComponent', () => {
  let component: HomeDiscoverComponent;
  let fixture: ComponentFixture<HomeDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
