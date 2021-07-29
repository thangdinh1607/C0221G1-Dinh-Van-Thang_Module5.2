import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../sevice/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  createProduct() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      this.router.navigateByUrl('product1/list');
    }, error => {
      console.log(error);
    });
  }
}
