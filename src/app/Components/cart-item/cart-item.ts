import { Component, Input } from '@angular/core';
import { cwd } from 'node:process';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: any;

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    }
    console.log(item.quantity);
  }
  
  increaseQuantity(item: any) {
    item.quantity += 1;
    console.log(item.quantity);
  }

  removeItem(item: any) {
    item.quantity = 0;
  }

  getSubtotal(item: any) {
    return item.price * item.quantity;
  }

}
