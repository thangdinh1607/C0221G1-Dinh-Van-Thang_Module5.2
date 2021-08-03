import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerTypes: CustomerType[] = [];
  customerForm: FormGroup;
  id: number;
  customer: Customer;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getId();
    this.getCustomerEdit();
    this.getAllCustomerType()
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
      console.log(data);
    }, error => {
      console.log(error);
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
    console.log(this.id);
    this.customerService.findCustomerByID(this.id).subscribe(customer => {
      this.customer = customer;
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        typeCustomer: new FormControl(customer.typeCustomer),
        name: new FormControl(customer.name),
        gender: new FormControl(customer.gender),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
      });
    });
  }

  editCustomer() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(this.id, customer).subscribe(() => {
      this.router.navigateByUrl('/customer/list');
    });
  }
}
