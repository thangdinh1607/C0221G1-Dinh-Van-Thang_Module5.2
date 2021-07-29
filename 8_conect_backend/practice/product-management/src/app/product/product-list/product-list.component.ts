import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../sevice/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct()
      .subscribe(data => {
          this.products = data;
        }, error => {
          console.log(error);
        },
      );
  }

  deleteProduct(id: number) {
    this.idDelete = id;
    this.productService.deleteProduct(this.idDelete).subscribe(() => {
      this.getAllProduct();
    }, error => {
      console.log('not found');
    });
  }

  searchName(nameSearch: string) {
    console.log(nameSearch);
    this.productService.searchNameProduct(nameSearch).subscribe(data => {
      this.products = data;
    }, error => {
      console.log('errors');
    });
  }

  search(nameSearch: string, priceSearch: number) {
    console.log(nameSearch);
    console.log(priceSearch);
    this.productService.searchProduct(nameSearch, priceSearch).subscribe(data => {
      this.products = data;
    }, error => {
      console.log('errors');
    });
  }
}
