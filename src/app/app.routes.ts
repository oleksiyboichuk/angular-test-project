import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/products/components/home/home.component')
      .then(c => c.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component')
      .then(c => c.ProductsComponent),
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./features/products/components/product/product.component')
      .then(c => c.ProductComponent),
  },
];
