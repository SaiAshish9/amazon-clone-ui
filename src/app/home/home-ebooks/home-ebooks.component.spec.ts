import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEbooksComponent } from './home-ebooks.component';

describe('HomeEbooksComponent', () => {
  let component: HomeEbooksComponent;
  let fixture: ComponentFixture<HomeEbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEbooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
