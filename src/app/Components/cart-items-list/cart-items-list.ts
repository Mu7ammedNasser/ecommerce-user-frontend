import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart-items-list',
  imports: [CartItem, CommonModule],
  templateUrl: './cart-items-list.html',
  styleUrl: './cart-items-list.css',
})
export class CartItemsList {
  @Input() cartItems!: any[];
  @Output() quantityChange = new EventEmitter<{ productId: number, quantity: number }>();
  @Output() itemRemove = new EventEmitter<number>();

  onQuantityChange(event: { productId: number, quantity: number }) {
    console.log('CartItemsList.onQuantityChange received:', event);
    this.quantityChange.emit(event);
  }

  onItemRemove(productId: number) {
    console.log('CartItemsList.onItemRemove received:', productId);
    this.itemRemove.emit(productId);
  }
}
