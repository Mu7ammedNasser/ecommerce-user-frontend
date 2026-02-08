import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassThrough } from 'stream';
import { Product } from '../Interfaces/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private readonly baseUrl = "http://localhost:3000/products";
  constructor(private http : HttpClient){}


  getAllProducts(){

    return this.http.get<Product[]>(this.baseUrl);
  }

  
    getProductById(id: number): Observable<Product> {

    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }




  
}
