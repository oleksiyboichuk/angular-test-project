import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ProductsModel } from '../models/products.model';

@Injectable({providedIn: 'root'})

export class ProductsService {
  private productsUrl = 'https://fakestoreapi.com/products';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };

  constructor(
    private http: HttpClient) {
  }

  getProducts(): Observable<ProductsModel[]> {
    return this.http.get<ProductsModel[]>(this.productsUrl);
  }

  getProductsById(id: number): Observable<ProductsModel> {
    const url = `${ this.productsUrl }/${ id }`;
    return this.http.get<ProductsModel>(url);
  }
}
