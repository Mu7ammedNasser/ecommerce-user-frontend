import { Component, signal } from '@angular/core';
import { CartItemsList } from "../cart-items-list/cart-items-list";
import { CartSummary } from "../cart-summary/cart-summary";
import { CartEmpty } from '../cart-empty/cart-empty';

@Component({
  selector: 'app-cart',
  imports: [CartItemsList, CartSummary, CartEmpty],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {


  cart = signal({
    "id": "cart_1",
    "userId": "u1",
    "items": [
      // {
      //   "id": "p1",
      //   "name": "Pro Sound Wireless Headphones",
      //   "price": 299,
      //   "quantity": 1,
      //   "image": "/assets/images/headphones.png",
      //   "variant": {
      //     "color": "Matte Black"
      //   }
      // },
      {
        "id": "p2",
        "name": "Mechanical RGB Keyboard",
        "price": 15009,
        "quantity": 1,
        "image": "/assets/images/keyboard.png",
        "variant": {
          "switch": "Cherry MX Blue"
        }
      },
      {
        "id": "p3",
        "name": "4K UltraWide Curved Monitor",
        "price": 449,
        "quantity": 1,
        "image": "/assets/images/monitor.png",
        "variant": {
          "size": "34-inch"
        }
      },
      {
        "id": "p3",
        "name": "4K UltraWide Curved Monitor",
        "price": 449,
        "quantity": 2,
        "image": "/assets/images/monitor.png",
        "variant": {
          "size": "34-inch"
        }
      },
      {
        "id": "p3",
        "name": "4K UltraWide Curved Monitor",
        "price": 449,
        "quantity": 1,
        "image": "/assets/images/monitor.png",
        "variant": {
          "size": "34-inch"
        }
      }
    ]
  })


  cartItems : any[] = this.cart().items;


  /**
   *
   */
  constructor() {
    console.log(this.cartItems.length)
    
  }



  

}



