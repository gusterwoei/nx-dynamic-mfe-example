import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from "./carts.component";

@Component({
  imports: [CommonModule, CartsComponent],
  selector: 'app-cart-entry',
  template: `<app-cart-component></app-cart-component>`,
})
export class RemoteEntryComponent {}
