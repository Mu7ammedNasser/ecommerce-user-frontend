import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsImages } from './product-details-images';

describe('ProductDetailsImages', () => {
  let component: ProductDetailsImages;
  let fixture: ComponentFixture<ProductDetailsImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
