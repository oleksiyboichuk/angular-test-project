import { Component, OnInit } from '@angular/core';
import { ProductsModel } from './models/products.model';
import { ProductsService } from './services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ButtonModule,
    RatingModule,
    TagModule,
    DataViewModule,
    BreadcrumbModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})


export class ProductsComponent implements OnInit {
  products: ProductsModel[] = [];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.items = [{label: 'Home'}, {label: 'Products'}];

    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

}
