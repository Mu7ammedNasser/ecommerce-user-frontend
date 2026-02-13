import { HttpClient } from '@angular/common/http';
import { Component, Input, signal, SimpleChanges, OnChanges } from '@angular/core';
import { Products } from '../../Core/Services/products';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-product-details-images',
  imports: [],
  templateUrl: './product-details-images.html',
  styleUrl: './product-details-images.css',
})
export class ProductDetailsImages {



  myProduct = signal <Product |null >(null);
  productID: number ;
  baseImg = signal("" as string);

  constructor(private route: ActivatedRoute, private productservic: Products) {
    this.productID = (
      this.route.snapshot.params['id'].replace(':', '')
    );
    console.log(this.myProduct());
    

  }

  ngOnInit() {
    this.productservic.getProductById(this.productID).subscribe((product) => {
      this.myProduct.set(product);
      this.baseImg.set(product.images[0]);
      console.log(this.baseImg());
      
    });
  }


  changeImg(event: Event) {
    let imgElement = event.target as HTMLImageElement;
    let imageSrc = imgElement.src;

    // Swap using signals: read the current value, set the new value, then update the element
    const previousBase = this.myProduct()!.images[0];
    this.myProduct()!.images[0] = imageSrc;
    imgElement.src = previousBase;
  }


}