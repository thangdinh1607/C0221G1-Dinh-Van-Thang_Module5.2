import {Injectable} from '@angular/core';
import {Product} from '../../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly url = 'http://localhost:3000/';
  products: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}` + 'product1');
  }

  saveProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.url}` + 'product1', product);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.url}` + 'product1/' + `${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient.put(`${this.url}product1/${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete(`${this.url}product1/${id}`);
  }
}
