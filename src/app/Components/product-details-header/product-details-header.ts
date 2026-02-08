import { Component, Input, signal } from '@angular/core';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-product-details-header',
  imports: [],
  templateUrl: './product-details-header.html',
  styleUrl: './product-details-header.css',
})
export class ProductDetailsHeader {
  // @Input() myProduct:Product = {} as Product;
  @Input() myProduct = signal({} as Product);



}
