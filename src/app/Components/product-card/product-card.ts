import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Products } from '../../Core/Services/products';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  allProduct = signal<Product[]>([]);
  isBrowser: boolean;
  Array = Array;
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object, 
    private productService: Products
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  currentIndex = 0;
  itemsPerView = 3;

  ngOnInit() {
    if (this.isBrowser) {
      this.updateItemsPerView();
      window.addEventListener('resize', () => this.updateItemsPerView());
    }
    
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProduct.set(products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  // Get first line of description
  getFirstLine(description: string): string {
    if (!description) return '';
    const firstLine = description.split('.')[0]; // Split by period
    return firstLine + (firstLine.length < description.length ? '...' : '');
  }

  get canGoPrev() {
    return this.currentIndex > 0;
  }

  get canGoNext() {
    return this.currentIndex < this.allProduct().length - this.itemsPerView;
  }

  prev() {
    if (this.canGoPrev) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.canGoNext) {
      this.currentIndex++;
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  get totalDots() {
    const products = this.allProduct();
    if (products.length === 0) return 0;
    return Math.max(1, products.length - this.itemsPerView + 1);
  }

  updateItemsPerView() {
    if (!this.isBrowser) return;
    
    const width = window.innerWidth;
    if (width < 640) {
      this.itemsPerView = 1;
    } else if (width < 1024) {
      this.itemsPerView = 2;
    } else {
      this.itemsPerView = 3;
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      window.removeEventListener('resize', () => this.updateItemsPerView());
    }
  }
}