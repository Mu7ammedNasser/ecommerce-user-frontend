
import { Component, Input, Signal, computed } from '@angular/core';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-product-details-specification',
  templateUrl: './product-details-specification.html',
  styleUrl: './product-details-specification.css',
})
export class ProductDetailsSpecification {

  // ✅ receive the signal — DO NOT create one
  @Input() myProduct!: Signal<Product>;

  // ✅ derive data reactively
  description = computed(() => {
    const desc = this.myProduct()?.description;
    if (!desc) return null;
    const parts = desc.split(',').map(s => s.trim()).filter(Boolean);
    return parts.length ? parts : null;
  });

}
