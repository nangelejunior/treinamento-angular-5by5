import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  authenticate(data: any) {
    return this.http.post('http://localhost:3000/accounts/authenticate', data);
  }

  listProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getProduct(id) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  salveProduct(product: Product) {
    return this.http.post('http://localhost:3000/products', product);
  }

  editProduct(product: Product) {
    return this.http.put(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete(`http://localhost:3000/products/${product.id}`);
  }
}
