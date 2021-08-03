import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer');
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/customer', customer);
  }

  findCustomerByID(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(API_URL + '/customer' + `/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(API_URL + '/customer' + `/${id}`, customer);
  }

  removeCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(API_URL + '/customer' + `/${id}`);
  }

  searchByName(nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer?name_like=' + `${nameSearch}`);
  }

  searchByCustomerType(num: number, nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer?typeCustomer=' + `${num}` + '&name_like=' + `${nameSearch}`);
  }
}
