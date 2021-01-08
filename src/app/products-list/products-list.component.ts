import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  items: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (data: any) => this.items = data
    );
  }

}
