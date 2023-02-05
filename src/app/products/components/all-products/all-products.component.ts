import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: any[] = [];
  categories: string[] = [];
  loading:boolean = false;

  constructor(private service: ProductsService) { }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((response: any) => {
      this.products = response;
      this.loading = false;
    }, error => {
      this.loading = false;
      alert("error");
    })
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((response: any) => {
      this.categories = response;
      this.loading = false;
      // console.log(response);
    }, error => {
      alert("error");
      this.loading = false;
    })
  }

  filterCategory(event:any) {
    let value = event.target.value;
    (value == "all") ?this.getProducts() :this.getProductsCategory(value)
  }

  getProductsCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((response: any) => {
      this.products = response;
      this.loading = false;
    })
  }
}
