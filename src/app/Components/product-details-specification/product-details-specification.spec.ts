import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSpecification } from './product-details-specification';

describe('ProductDetailsSpecification', () => {
  let component: ProductDetailsSpecification;
  let fixture: ComponentFixture<ProductDetailsSpecification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsSpecification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSpecification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
