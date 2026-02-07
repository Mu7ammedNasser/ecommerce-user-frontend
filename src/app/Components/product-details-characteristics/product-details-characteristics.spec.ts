import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCharacteristics } from './product-details-characteristics';

describe('ProductDetailsCharacteristics', () => {
  let component: ProductDetailsCharacteristics;
  let fixture: ComponentFixture<ProductDetailsCharacteristics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsCharacteristics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCharacteristics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
