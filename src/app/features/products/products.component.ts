import { Component, OnInit } from '@angular/core';
import { ProductsModel } from './models/products.model';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: ProductsModel[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

}
