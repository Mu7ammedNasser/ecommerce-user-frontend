import { Component ,Input } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})
export class CartSummary {
  @Input() cartItems!: any[];

totalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // total = signal<number>(0);
  // private _cartItems: any[] = [];
  // @Input() set cartItems(items: any[]) {
  //   this._cartItems = items ?? [];
  //   this.total.set(this._cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
  // }
  // get cartItems() {
  //   return this._cartItems;
  // }
  getSubtotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  getTax() {
    return (this.totalPrice() * 0.14).toFixed(2);
  }

  getTotal() {
    return (this.totalPrice() + parseFloat(this.getTax())).toFixed(2);
  }
}
