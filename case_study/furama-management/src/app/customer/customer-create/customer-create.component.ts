import {Component, OnInit} from '@angular/core';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    typeCustomer: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', Validators.required),
    idCard: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  });

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createCustomer() {
    const customer = this.customerForm.value;
    this.customerService.createCustomer(customer).subscribe(() => {
      console.log('create is success');
      this.router.navigateByUrl('customer/list');
    }, error => {
      console.log('create customer is errors' + error);
    });
  }
}
