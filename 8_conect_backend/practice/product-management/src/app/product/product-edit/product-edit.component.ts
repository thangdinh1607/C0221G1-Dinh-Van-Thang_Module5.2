import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';
import {ProductService} from '../sevice/product.service';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: number;
  productForm: FormGroup;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getId();
    this.getProductEdit();
  }

  getId() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
    });
  }

  getProductEdit() {
    console.log(this.id);
    this.productService.findProductById(this.id).subscribe(data => {
      this.productForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
      });
    }, error => {
      console.log(error);
    });
  }

  updateProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigateByUrl('product1/list');
    });
  }
}
