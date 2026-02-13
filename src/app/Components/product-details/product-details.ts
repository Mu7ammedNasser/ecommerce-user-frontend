import { Component, Output, output, signal } from '@angular/core';
import { ProductDetailsHeader } from '../product-details-header/product-details-header';
import { ProductDetailsCharacteristics } from '../product-details-characteristics/product-details-characteristics';
import { ProductDetailsSpecification } from '../product-details-specification/product-details-specification';
import { ProductDetailsImages } from '../product-details-images/product-details-images';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Core/Interfaces/iproduct';
import { Products } from '../../Core/Services/products';

@Component({
  selector: 'app-product-details',
  imports: [ProductDetailsHeader, ProductDetailsCharacteristics, ProductDetailsSpecification, ProductDetailsImages],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  productId: any;
  myProduct = signal({} as Product);

  constructor(private myRoute: ActivatedRoute, private productservice: Products) {
    this.productId = (
      myRoute.snapshot.params['id'].replace(':', '')
    );
  }


  ngOnInit() {
    this.productservice.getProductById(this.productId).subscribe({
      next: (data) => {
        this.myProduct.set(data);
      }
    })
  }




}
