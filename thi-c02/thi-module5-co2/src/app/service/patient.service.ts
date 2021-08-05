import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Patient} from '../model/patient';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(API_URL + '/patient');
  }
  update(id: number, patient: Patient): Observable<Patient> {
    return this.httpClient.put<Patient>(API_URL + '/patient' + `/${id}`, patient);
  }
  findByID(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(API_URL + '/patient' + `/${id}`);
  }
  remove(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(API_URL + '/patient' + `/${id}`);
  }
}
