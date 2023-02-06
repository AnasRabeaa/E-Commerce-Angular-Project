import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{
  id: any;
  data: any = {};
  loading: boolean = false;
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

    ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.loading = true;
    this.service.getProductById(this.id).subscribe(response => {
      this.loading = false;
      this.data = response;
    }, error => {
      this.loading = false;
      alert(error);
    })
  }
}
