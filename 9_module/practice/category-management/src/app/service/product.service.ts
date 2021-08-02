import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + 'product');
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + 'product', product);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + 'product/' + `${id}`);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.put<Product>(API_URL + 'product/' + `${id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(API_URL + 'product/' + `${id}`);
  }

  searchProductByName(nameSearch: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + 'product?name_like=' + `${nameSearch}`);
  }

  searchProductByNameAndByPrice(nameSearch: string, price: number ): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + 'product?name_like=' + `${nameSearch}&price=${price}`);
  }
}
