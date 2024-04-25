import { Component } from '@angular/core';
import {ProductsComponent} from './features/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-test-project';
}
