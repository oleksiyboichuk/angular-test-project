import { Component, OnInit } from '@angular/core';
import { ProductsModel } from './models/products.model';
import { ProductsService } from './services/products.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
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
