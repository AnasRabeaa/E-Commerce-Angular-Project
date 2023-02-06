import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

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

  addToCart(event: any) {
    // console.log(event);
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item => item.item.id == event.item.id);
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartProducts.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }

}
