import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Location } from '@angular/common';
import { ProductsModel } from '../../models/products.model';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';



@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ButtonModule,
    TagModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {

  displayModal: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private location: Location,

  ) {

  }

  @Input() product?: ProductsModel;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProductsById(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
