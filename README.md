# MyStore (Angular SPA)

Single-page e-commerce demo built with Angular. The app fetches products, allows adding/removing items in a cart, validates a checkout form, and shows an order success page.

## Features
- Product list from `assets/data.json` via `HttpClient`
- Product detail page with image, name, price, description
- Add to cart with user feedback; remove items; total cost in cart
- Checkout with `ngModel` bindings and validation
- Success page after checkout
- Angular routing with `<router-outlet>` and `routerLink`

## Install & Run
1. Requirements: Node 18+, npm
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```
   The dev server runs on `http://localhost:4200` (no page reload during navigation).

## Project Structure
- `src/app/components/` – UI components (list, item, detail, cart, checkout, success)
- `src/app/services/` – `ProductsService`, `CartService`
- `src/app/models/` – `Product` TypeScript model
- `src/assets/data.json` – product seed data

## Notes
- To disable analytics prompts (optional): `ng analytics disable --global`
- Code style follows Udacity's Frontend Nanodegree guidelines and Angular best practices.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
