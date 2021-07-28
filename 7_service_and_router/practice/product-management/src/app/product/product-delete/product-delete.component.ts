import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private  router: Router) {
  }

  ngOnInit(): void {
    this.deleteProduct();
  }

  deleteProduct() {
    let id = +this.activatedRoute.snapshot.params.id;
    this.productService.deleteProduct(id);
    this.router.navigateByUrl('');
    console.log(id);
  }
}
