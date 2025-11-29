import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-center">
      <section class="container centered">
        <h2>Order successful</h2>
        <p>Thanks, {{ name || 'Customer' }}! Your order is confirmed.</p>
        <a routerLink="/">Continue shopping</a>
      </section>
    </div>
  `,
  styles: ``
})
export class SuccessComponent {
  name = this.route.snapshot.queryParamMap.get('name') || '';
  constructor(private route: ActivatedRoute) {}
}
