import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-product-details-characteristics',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details-characteristics.html',
  styleUrl: './product-details-characteristics.css',
})
export class ProductDetailsCharacteristics {

  // ✅ receive the signal (DO NOT create it)
  @Input() myProduct!: Signal<Product>;

  // ✅ derived value (auto-updates)
  savingPercent = computed(() => {
    let p = this.myProduct();
    if (!p?.originalPrice || !p?.price) return 0;

    return Math.round(
      ((p.originalPrice - p.price) / p.originalPrice) * 100
    );
  });

  selectedColor: string = 'dark-blue';
  selectedSize: string = 'standard';
  counter: number = 0;

  changeRingColor(color: string) {
    this.selectedColor = color;
  }

  changeSize(size: string) {
    this.selectedSize = size;
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
