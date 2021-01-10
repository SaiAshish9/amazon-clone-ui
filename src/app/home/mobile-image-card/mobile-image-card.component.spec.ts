import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileImageCardComponent } from './mobile-image-card.component';

describe('MobileImageCardComponent', () => {
  let component: MobileImageCardComponent;
  let fixture: ComponentFixture<MobileImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
