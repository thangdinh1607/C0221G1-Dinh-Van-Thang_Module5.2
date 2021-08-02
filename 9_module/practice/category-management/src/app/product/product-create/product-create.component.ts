import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  productForm = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
  });

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log('category' + error);
    });
  }


  createProduct() {
    const product = this.productForm.value;
    console.log(product);
    this.productService.createProduct(product).subscribe(() => {
      this.router.navigateByUrl('product/list');
    }, error => {
      console.log('create Product' + product);
    });
  }
}
