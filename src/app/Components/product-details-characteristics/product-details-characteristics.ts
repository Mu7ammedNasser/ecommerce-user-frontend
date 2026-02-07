import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details-characteristics',
  imports: [CommonModule],
  templateUrl: './product-details-characteristics.html',
  styleUrl: './product-details-characteristics.css',
})
export class ProductDetailsCharacteristics {


  selectedColor: string = "dark-blue";
  selectedSize: string = "standard";
  counter: number = 0;

  changeRingColor(color: string) {
    this.selectedColor = color;

  }
  changeSize(size: string) {
    this.selectedSize = size;
    console.log('Selected size:', this.selectedSize); // ← Add this
  }

  increaseCount() {
    this.counter++;
  }
  decreaseCount() {
    if (this.counter > 0) {
      this.counter--;


    }
  }

}
