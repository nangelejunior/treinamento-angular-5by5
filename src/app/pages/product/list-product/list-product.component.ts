import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public products: Product[];

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.listProducts()
      .subscribe(
        (res: Product[]) => {
          this.products = res;
        }
      )
  }

}
