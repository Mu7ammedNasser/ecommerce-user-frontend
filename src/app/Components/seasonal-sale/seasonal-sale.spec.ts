import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalSale } from './seasonal-sale';

describe('SeasonalSale', () => {
  let component: SeasonalSale;
  let fixture: ComponentFixture<SeasonalSale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalSale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalSale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
