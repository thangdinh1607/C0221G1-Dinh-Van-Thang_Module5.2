import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: Category[] = [];
  id: number;
  productForm: FormGroup;
  product: Product;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getID();
    this.getProductEdit();

  }

  getID() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
    });
  }

  // getID() {
  //   this.id = +this.activatedRoute.snapshot.paramMap.get('id');
  // }

  getProductEdit() {
    this.productService.findProductById(this.id).subscribe(product => {
      this.product = product;
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        category: new FormControl(product.category),
      });
    }, error => {
      console.log(error);
    });

  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log('get all category' + error);
    });

  }

  editProduct() {
    const product = this.productForm.value;
    this.productService.updateProduct(this.id, product).subscribe(() => {
      this.router.navigateByUrl('product/list');
    }, error => {
      console.log('edit product err' + error);
    });
  }
}
