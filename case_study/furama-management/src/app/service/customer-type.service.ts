import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from '../model/customer-type';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomerType(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/typeCustomer');
  }

  createCustomerType(typeCustomer: CustomerType): Observable<Customer> {
    return this.httpClient.post<Customer>(API_URL + '/typeCustomer', typeCustomer);
  }

  findCustomerTypeByID(id: number): Observable<CustomerType> {
    return this.httpClient.get<CustomerType>(API_URL + '/typeCustomer' + `/${id}`);
  }

  updateCustomerType(id: number, typeCustomer: CustomerType): Observable<CustomerType> {
    return this.httpClient.put<CustomerType>(API_URL + '/typeCustomer' + `/${id}`, typeCustomer);
  }

  removeCustomerType(id: number): Observable<CustomerType> {
    return this.httpClient.delete<CustomerType>(API_URL + '/typeCustomer' + `/${id}`);
  }
}
