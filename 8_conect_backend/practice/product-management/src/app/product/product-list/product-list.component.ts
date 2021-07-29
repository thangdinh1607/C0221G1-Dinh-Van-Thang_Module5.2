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
      this.router.navigateByUrl('product1/list');
    }, error => {
      console.log('not found');
    });
  }
}
