import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Observable} from 'rxjs';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
  ) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllCustomerType();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    }, error => {
      console.log('not found');
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(data => {
      this.customerTypes = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
