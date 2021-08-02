import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  product: Product;
  idDelete: number;
  productDelete: Product;

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getAllCategory();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(data => {
      this.products = data;
    }, error => {
      console.log('product' + error);
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    }, error => {
      console.log('categories' + error);
    });
  }

  sendIdDelete(id: number) {
    this.idDelete = id;
    this.getInfoProductDelete();
  }

  getInfoProductDelete() {
    this.productService.findProductById(this.idDelete).subscribe(data => {
      console.log(this.idDelete);
      this.productDelete = data;
      console.log(this.productDelete);
    }, error => {
      console.log('not found');
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAllProduct();
      console.log('delete is success');
    }, error => {
      console.log('not found');
    });
  }

  searchByName(searchName: string) {
    console.log(searchName);
    this.productService.searchProductByName(searchName).subscribe(data => {
      this.products = data;
      console.log(searchName);
    }, error => {
      console.log(error);
    });
  }

  searchByNameAndByPrice(searchName: string, price: number) {
    if (price === 0) {
      this.searchByName(searchName);
    } else {
      console.log(searchName);
      console.log(price);
      this.productService.searchProductByNameAndByPrice(searchName, price).subscribe(data => {
        this.products = data;
      }, error => {
        console.log('not found' + error);
      });
    }
  }
}
