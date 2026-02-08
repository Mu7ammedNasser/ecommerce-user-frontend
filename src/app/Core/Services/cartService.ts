import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly BaseUrl = "http://localhost:3000";
  /*
   *
   *
   */
  constructor(private http: HttpClient) {}
  // getCartItems() {
  //   return this.http.get(`${this.BaseUrl}/cart/items`);
  // }


  getAllCarts(){
    return this.http.get(`${this.BaseUrl}/cart`);
  }

  getCartByUserId(userId: string) {
    return this.http.get<any[]>(
      `${this.BaseUrl}/cart?userId=${userId}`
    );
  }

  getCartById(cartId: string) {
    return this.http.get(`${this.BaseUrl}/cart/${cartId}`);
  }

  createCart(userId: number) {
    return this.http.post(`${this.BaseUrl}/cart`, { userId });
  }


 updateCart(cartId: string, cartData: any) {
  return this.http.put(`${this.BaseUrl}/cart/${cartId}`, cartData);
}

  deleteCart(cartId: string) {
    return this.http.delete(`${this.BaseUrl}/cart/${cartId}`);
  }


  removeItem(cartId: string, productId: string) {
    return this.http.delete(`${this.BaseUrl}/cart/${cartId}/items/${productId}`);
  }





//   removeFromCart(productId: number) {
//   const cart = this._cart();
//   if (!cart) return;

//   cart.items = cart.items.filter(i => i.productId !== productId);
//   this._cart.set({ ...cart });
// }

// updateQuantity(productId: number, quantity: number) {
//   const cart = this._cart();
//   if (!cart) return;

//   cart.items = cart.items.map(i =>
//     i.productId === productId ? { ...i, quantity } : i
//   );

//   this._cart.set({ ...cart });
// }


  
}
