import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {CustomerType} from '../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  pageDefault = 1;
  idDelete: number;
  customerDelete: Customer;

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
    }, error => {
      console.log(error);
    });
  }

  sendIdDelete(id: number) {
    this.idDelete = id;
    this.getInForCustomerDelete();
  }

  getInForCustomerDelete() {
    this.customerService.findCustomerByID(this.idDelete).subscribe(data => {
      this.customerDelete = data;
    }, error => {
      console.log('errors' + error);
    });
  }

  deleteCustomer(id: number) {
    this.customerService.removeCustomer(id).subscribe(() => {
      console.log('delete is success');
      this.getAllCustomer();
    }, error => {
      console.log(error);
    });
  }

  searchByName(searchName: string) {
    this.customerService.searchByName(searchName).subscribe(data => {
      this.customers = data;
    }, error => {
      console.log('search is errors' + error);
    });
  }

  searchByCustomerTypeAndName(num: number, nameSearch: string) {
    if (num !== 0) {
      this.customerService.searchByCustomerType(num, nameSearch).subscribe(data => {
        this.customers = data;
      }, error => {
        console.log(error);
      });
    } else {
      this.searchByName(nameSearch);
    }

  }
}
