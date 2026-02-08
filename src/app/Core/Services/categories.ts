import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Categories {
  private readonly baseUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductsByCategory(slug: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}?category=${slug}`);
  }


}
