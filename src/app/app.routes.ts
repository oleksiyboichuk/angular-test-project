import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },

  {
    path: 'products',
    loadComponent: () => import('./products/products.component')
      .then(c => c.ProductsComponent),
  },

  {
    path: 'products/:id',
    loadComponent: () => import('./products/components/product/product.component')
      .then(c => c.ProductComponent),
  },
];
