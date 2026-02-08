import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { ConfirmationModal } from '../custom-modal/custom-modal';

@Component({
  selector: 'app-cart-item',
  imports: [ConfirmationModal],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: any;
  @Output() quantityChange = new EventEmitter<{ productId: number, quantity: number }>();
  @Output() itemRemove = new EventEmitter<number>();
  showConfirmModal = signal(false);

  getSubtotal(item: any): number {
    return item.price * item.quantity;
  }

  increaseQuantity(item: any) {
    console.log('CartItem.increaseQuantity called with:', item);
    const event = { 
      productId: Number(item.productId),
      quantity: item.quantity + 1 
    };
    console.log('Emitting quantityChange event:', event);
    this.quantityChange.emit(event);
  }

  decreaseQuantity(item: any) {
    console.log('CartItem.decreaseQuantity called with:', item);
    if (item.quantity > 1) {
      const event = { 
        productId: Number(item.productId),
        quantity: item.quantity - 1 
      };
      console.log('Emitting quantityChange event:', event);
      this.quantityChange.emit(event);
    }
  }

  removeItem(item: any) {
    this.showConfirmModal.set(true);
  }

  confirmRemove() {
    this.showConfirmModal.set(false);
    this.itemRemove.emit(Number(this.item.productId));
  }

  cancelRemove() {
    this.showConfirmModal.set(false);
  }
}