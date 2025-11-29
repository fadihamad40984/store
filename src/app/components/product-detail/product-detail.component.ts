import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgIf, RouterLink, CurrencyPipe],
  template: `
    <div class="page-center">
      <section class="container centered" *ngIf="product">
        <img [src]="product.url" [alt]="product.name" />
        <h2>{{ product.name }}</h2>
        <p class="price">{{ product.price | currency }}</p>
        <p>{{ product.description }}</p>
        <div>
          <button (click)="add()">Add to Cart</button>
        </div>
        <p><a routerLink="/">Back to products</a></p>
      </section>
    </div>
  `,
  styles: `
    img { width:100%; max-width:480px; height: auto; border-radius:8px; }
    .price { font-weight:600; }
    section { display:flex; flex-direction:column; gap:.75rem; }
  `
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private products: ProductsService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.products.getProducts().subscribe(list => {
      this.product = list.find(p => p.id === id);
    });
  }

  add(): void {
    if (this.product) {
      this.cart.addToCart(this.product, 1);
      alert(`${this.product.name} has been added to your cart!`);
    }
  }
}
