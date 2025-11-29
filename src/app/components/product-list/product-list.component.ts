import { Component, OnInit, signal } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, AsyncPipe, ProductItemComponent],
  template: `
    <div class="page-center">
      <section class="container">
        <div class="grid">
          <app-product-item
            *ngFor="let p of products()"
            [product]="p"
            (add)="handleAdd($event)"
          />
        </div>
      </section>
    </div>
  `,
  styles: `
    .grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap:1rem; }
  `
})
export class ProductListComponent implements OnInit {
  products = signal<Product[]>([]);

  constructor(private productsService: ProductsService, private cart: CartService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => this.products.set(data));
  }

  handleAdd(product: Product): void {
    this.cart.addToCart(product, 1);
    alert(`${product.name} has been added to your cart!`);
  }
}
