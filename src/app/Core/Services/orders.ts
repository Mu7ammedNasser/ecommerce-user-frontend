import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Interfaces/iorder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Orders {
  private baseUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getOrderByUserId(userId: string) {
    return this.http.get<Order[]>(`${this.baseUrl}?userId=${userId}`);
  }

  createOrder(orderData: any) {
    return this.http.post<Order>(this.baseUrl, orderData);
  }

  updateOrder(orderId: string, orderData: any) {
    return this.http.put<Order>(`${this.baseUrl}/${orderId}`, orderData);
  }
}
