// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-side-bar',
//   imports: [RouterLink, RouterLinkActive],
//   templateUrl: './side-bar.html',
//   styleUrl: './side-bar.css',
// })
// export class SideBar {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {
  filters = {
    brands: {
      apple: true,
      samsung: false,
      dell: true,
      hp: false,
      lenovo: false,
    },
  };

  onBrandChange() {
    // Emit filter changes or update service
    console.log('Brand filters changed:', this.filters.brands);
  }

  resetFilters() {
    this.filters.brands = {
      apple: false,
      samsung: false,
      dell: false,
      hp: false,
      lenovo: false,
    };
  }

  clearAllFilters() {
    this.resetFilters();
  }
}
