import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferLineComponent } from './offer-line.component';

describe('OfferLineComponent', () => {
  let component: OfferLineComponent;
  let fixture: ComponentFixture<OfferLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
