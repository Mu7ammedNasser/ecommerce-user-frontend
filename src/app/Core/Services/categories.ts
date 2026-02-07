import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  baseUrl = 'http://localhost:3000';

  constructor(private HttpClient: HttpClient) {}
  // get all products

  getAllProducts(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(`${this.baseUrl}/products`);
  }

  //get Product by category
  getProductsByCategory(category: string) {
    return this.HttpClient.get<Product[]>(`${this.baseUrl}/products?category=${category}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.HttpClient.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}
