import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassThrough } from 'stream';
import { Product } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Products {
  private readonly product_URL = "http://localhost:3000/products";
  constructor(private http : HttpClient){}


  getAllProducts(){

    return this.http.get<Product[]>(this.product_URL);
  }


  getPriductByID(id: string){

return this.http.get<Product>(`http://localhost:3000/products/${id}`);

  }

  
}
