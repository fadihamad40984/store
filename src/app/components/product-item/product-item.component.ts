import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe],
  template: `
    <div class="card centered">
      <a [routerLink]="['/product', product?.id]" *ngIf="product">
        <img [src]="product.url" [alt]="product.name" />
        <h3>{{ product.name }}</h3>
      </a>
      <p class="price" *ngIf="product">{{ product.price | currency }}</p>
      <button (click)="onAddToCart()">Add to Cart</button>
      <p class="feedback" *ngIf="added">Added to cart!</p>
    </div>
  `,
  styles: `
    img { width:100%; height:180px; object-fit:cover; border-radius:6px; }
    .price { font-weight:600; }
    .feedback { color: green; font-size:.9rem; }
    button { padding:.5rem .75rem; }
  `
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() add = new EventEmitter<Product>();
  added = false;

  onAddToCart(): void {
    this.add.emit(this.product);
    this.added = true;
    setTimeout(() => (this.added = false), 1200);
  }
}
