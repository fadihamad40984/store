import { Component, computed } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  template: `
    <div class="page-center">
      <section class="container centered">
        <h2>Shopping Cart</h2>
        <div *ngFor="let item of cart.items()" class="row">
          <div class="name">{{ item.product.name }}</div>
          <div class="qty">× {{ item.quantity }}</div>
          <div class="price">{{ (item.product.price * item.quantity) | currency }}</div>
          <button (click)="remove(item.product.id)">Remove</button>
        </div>
        <div class="total">Total: {{ total() | currency }}</div>
      </section>
    </div>
  `,
  styles: `
    .row { display:grid; grid-template-columns: 1fr auto auto auto; gap: .5rem; align-items:center; padding:.5rem 0; border-bottom:1px solid #eee }
    .total { text-align:right; font-size:1.1rem; font-weight:600; margin-top:1rem }
  `
})
export class CartComponent {
  total = computed(() => this.cart.totalCost());

  constructor(public cart: CartService) {}

  remove(id: number): void {
    const item = this.cart.items().find(ci => ci.product.id === id);
    const productName = item?.product.name || 'Product';
    this.cart.removeFromCart(id);
    alert(`${productName} has been removed from your cart!`);
  }
}
