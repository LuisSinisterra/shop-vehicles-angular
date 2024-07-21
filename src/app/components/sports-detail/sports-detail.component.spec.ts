import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsDetailComponent } from './sports-detail.component';

describe('SportsDetailComponent', () => {
  let component: SportsDetailComponent;
  let fixture: ComponentFixture<SportsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsDetailComponent]
    });
    fixture = TestBed.createComponent(SportsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
