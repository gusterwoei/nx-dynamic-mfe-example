import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';
  path = '';
  profileClass = 'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden transform opacity-0 scale-95';
  profileExpanded = false;

  toggleProfile() {
    const baseClaass = 'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden';
    if (this.profileExpanded) {
      this.profileClass = `${baseClaass} transform opacity-0 scale-95`;
    } else {
      this.profileClass = `${baseClaass} transform opacity-100 scale-100`;
    }
    this.profileExpanded = !this.profileExpanded;
  }

  onMenuSelected(path: string) {
    this.path = path;
  }
}
