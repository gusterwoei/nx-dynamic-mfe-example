import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from "./carts.component";
import { NxWelcomeComponent } from "./nx-welcome.component";

@Component({
  imports: [CommonModule, CartsComponent, NxWelcomeComponent],
  selector: 'app-cart-entry',
  // template: `<app-nx-welcome></app-nx-welcome>`,
  template: `<app-cart-component></app-cart-component>`,
})
export class RemoteEntryComponent {}
