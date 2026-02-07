import { Component } from '@angular/core';
import { ProductDetailsHeader } from '../product-details-header/product-details-header';
import { ProductDetailsCharacteristics } from '../product-details-characteristics/product-details-characteristics';
import { ProductDetailsSpecification } from '../product-details-specification/product-details-specification';
import { ProductDetailsImages } from '../product-details-images/product-details-images';

@Component({
  selector: 'app-product-details',
  imports: [ProductDetailsHeader,ProductDetailsCharacteristics,ProductDetailsSpecification,ProductDetailsImages],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

}
