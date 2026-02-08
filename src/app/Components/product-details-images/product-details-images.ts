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
export class ProductDetailsImages implements OnChanges {

  @Input() myProduct = signal({} as Product);

  baseImg= signal("" as string) ;
  tempImg= signal("" as string) ;

  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['myProduct'] && this.myProduct().images?.length > 0) {
      this.baseImg.set(this.myProduct().images[0]) ;
    }
  }

  changeImg(event: Event) {
    let imgElement = event.target as HTMLImageElement;
    let imageSrc = imgElement.src;

    // Swap using signals: read the current value, set the new value, then update the element
    const previousBase = this.baseImg();
    this.baseImg.set(imageSrc);
    imgElement.src = previousBase;
  }
}