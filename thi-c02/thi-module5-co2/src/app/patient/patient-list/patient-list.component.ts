import {Component, OnInit} from '@angular/core';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../../model/patient';
import {PersonService} from '../../service/person.service';
import {Person} from '../../model/person';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  persons: Person[] = [];
  idDelete: number;
  patientDelete: Patient;

  constructor(private patientService: PatientService,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.getAllPatient();
    this.getAllPerson();
  }

  getAllPatient() {
    this.patientService.getAll().subscribe(data => {
      this.patients = data;
    });
  }

  getAllPerson() {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    });
  }

  sendIdDelete(id: number) {
    this.idDelete = id;
    this.getInForPatientDelete();
  }

  getInForPatientDelete() {
    this.patientService.findByID(this.idDelete).subscribe(data => {
      this.patientDelete = data;
    }, error => {
      console.log('errors' + error);
    });
  }
  deletePatient(id: number) {
    this.patientService.remove(id).subscribe(() => {
      console.log('delete is success');
      this.getAllPatient();
    }, error => {
      console.log(error);
    });
  }
}
