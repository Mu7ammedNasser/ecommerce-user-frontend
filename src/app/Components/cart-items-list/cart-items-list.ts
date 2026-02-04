import { Component, Input, signal } from '@angular/core';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart-items-list',
  imports: [CartItem],
  templateUrl: './cart-items-list.html',
  styleUrl: './cart-items-list.css',
})
export class CartItemsList {
  @Input() cartItems!: any[];

  // cart = signal({
  //   "id": "cart_1",
  //   "userId": "u1",
  //   "items": [
  //     {
  //       "id": "p1",
  //       "name": "Pro Sound Wireless Headphones",
  //       "price": 299,
  //       "quantity": 1,
  //       "image": "/assets/images/headphones.png",
  //       "variant": {
  //         "color": "Matte Black"
  //       }
  //     },
  //     {
  //       "id": "p2",
  //       "name": "Mechanical RGB Keyboard",
  //       "price": 159,
  //       "quantity": 1,
  //       "image": "/assets/images/keyboard.png",
  //       "variant": {
  //         "switch": "Cherry MX Blue"
  //       }
  //     },
  //     {
  //       "id": "p3",
  //       "name": "4K UltraWide Curved Monitor",
  //       "price": 449,
  //       "quantity": 1,
  //       "image": "/assets/images/monitor.png",
  //       "variant": {
  //         "size": "34-inch"
  //       }
  //     },
  //     {
  //       "id": "p3",
  //       "name": "4K UltraWide Curved Monitor",
  //       "price": 449,
  //       "quantity": 1,
  //       "image": "/assets/images/monitor.png",
  //       "variant": {
  //         "size": "34-inch"
  //       }
  //     },
  //     {
  //       "id": "p3",
  //       "name": "4K UltraWide Curved Monitor",
  //       "price": 449,
  //       "quantity": 1,
  //       "image": "/assets/images/monitor.png",
  //       "variant": {
  //         "size": "34-inch"
  //       }
  //     }
  //   ]
  // })


  // cartItems : any[] = this.cart().items;

}
