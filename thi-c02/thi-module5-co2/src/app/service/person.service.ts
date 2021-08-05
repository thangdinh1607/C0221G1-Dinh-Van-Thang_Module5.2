import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/person';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(API_URL + '/person');
  }
}
