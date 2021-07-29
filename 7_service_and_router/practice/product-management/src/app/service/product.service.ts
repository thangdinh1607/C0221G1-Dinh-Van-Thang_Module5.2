import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly uri = 'http://localhost:3000/product';

  constructor(private httpClient: HttpClient) {
  }

  getAllProductAPI(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.uri}`);
  }
}



