import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="page-center">
      <section class="container centered">
        <h2>Checkout</h2>
        <form (ngSubmit)="submit()" #f="ngForm">
          <label>
            Name
            <input name="name" [(ngModel)]="name" #nameInput="ngModel" minlength="3" required />
          </label>
          <div *ngIf="(nameInput.touched || nameInput.dirty) && nameInput.invalid" class="error">
            <span *ngIf="nameInput.errors?.['required']">Name is required.</span>
            <span *ngIf="nameInput.errors?.['minlength']">Name must be at least 3 characters.</span>
          </div>

          <label>
            Address
            <input name="address" [(ngModel)]="address" #addressInput="ngModel" required />
          </label>
          <div *ngIf="(addressInput.touched || addressInput.dirty) && addressInput.invalid" class="error">
            <span *ngIf="addressInput.errors?.['required']">Address is required.</span>
          </div>

          <label>
            Credit Card
            <input name="cc" [(ngModel)]="cc" #ccInput="ngModel" required minlength="16" maxlength="16" />
          </label>
          <div *ngIf="(ccInput.touched || ccInput.dirty) && ccInput.invalid" class="error">
            <span *ngIf="ccInput.errors?.['required']">Credit card number is required.</span>
            <span *ngIf="ccInput.errors?.['minlength']">Credit card must be 16 digits.</span>
          </div>

          <button type="submit" [disabled]="!f.form.valid">Place Order</button>
        </form>
      </section>
    </div>
  `,
  styles: `
    form { display:flex; flex-direction:column; gap:.75rem; max-width:420px }
    .error { color:#b00020 }
    input { padding:.5rem .75rem }
  `
})
export class CheckoutComponent {
  name = '';
  address = '';
  cc = '';

  constructor(private router: Router, private cart: CartService) {}

  submit(): void {
    if (!this.name || this.name.length < 3 || !this.address || !this.cc || this.cc.length < 16) return;
    this.cart.clear();
    this.router.navigate(['/success'], { queryParams: { name: this.name } });
  }
}
