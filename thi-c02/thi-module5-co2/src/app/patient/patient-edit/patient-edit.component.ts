import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PatientService} from '../../service/patient.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../../service/person.service';
import {Person} from '../../model/person';
import {Patient} from '../../model/patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  id: number;
  patientForm: FormGroup;
  persons: Person[] = [];
  patient: Patient;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private patientService: PatientService,
              private personService: PersonService) {
  }

  ngOnInit(): void {
    this.getId();
    this.getCustomerEdit();
    this.getAllPerson();
  }

  getAllPerson() {
    this.personService.getAll().subscribe(data => {
      this.persons = data;
    });
  }

  getId() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    }, error => {
      console.log('can not get id' + error);
    });
  }

  getCustomerEdit() {
    this.patientService.findByID(this.id).subscribe(patient => {
      this.patient = patient;
      this.patientForm = new FormGroup({
        id: new FormControl(patient.id),
        person: new FormControl(patient.person, [Validators.required]),
        startDay: new FormControl(patient.startDay, [Validators.required]),
        endDay: new FormControl(patient.endDay, [Validators.required]),
        reason: new FormControl(patient.reason, [Validators.required]),
        method: new FormControl(patient.method, [Validators.required]),
        doctor: new FormControl(patient.doctor, [Validators.required]),
      });
    });
  }

  edit() {
    const patient = this.patientForm.value;
    this.patientService.update(this.id, patient).subscribe(() => {
      this.router.navigateByUrl('/patient/list');
    });
  }
}
