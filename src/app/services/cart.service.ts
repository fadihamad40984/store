import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);

  readonly items = this.itemsSignal.asReadonly();

  addToCart(product: Product, qty: number = 1): void {
    const current = this.itemsSignal();
    const index = current.findIndex(ci => ci.product.id === product.id);
    if (index >= 0) {
      const updated = [...current];
      updated[index] = { ...updated[index], quantity: updated[index].quantity + qty };
      this.itemsSignal.set(updated);
    } else {
      this.itemsSignal.set([...current, { product, quantity: qty }]);
    }
  }

  removeFromCart(productId: number): void {
    this.itemsSignal.set(this.itemsSignal().filter(ci => ci.product.id !== productId));
  }

  clear(): void {
    this.itemsSignal.set([]);
  }

  totalCost(): number {
    return this.itemsSignal().reduce((sum, ci) => sum + ci.product.price * ci.quantity, 0);
  }
}


