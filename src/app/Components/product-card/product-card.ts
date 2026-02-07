import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
   
  }

  cardsData  = [
  {
    "name": "Wireless Headphones",
    "price": 1200,
    "description": "High-quality wireless headphones with noise cancellation and long battery life."
  },
  {
    "name": "Smart Watch",
    "price": 1800,
    "description": "Modern smart watch with heart rate monitoring and fitness tracking."
  },
  {
    "name": "Gaming Mouse",
    "price": 650,
    "description": "Ergonomic gaming mouse with adjustable DPI and RGB lighting."
  },
  {
    "name": "Mechanical Keyboard",
    "price": 2200,
    "description": "Mechanical keyboard with tactile switches and durable build quality."
  },
  {
    "name": "Portable Speaker",
    "price": 950,
    "description": "Compact portable speaker with powerful sound and Bluetooth support."
  },
  {
    "name": "Laptop Stand",
    "price": 400,
    "description": "Adjustable laptop stand for better posture and improved airflow."
  }
]


  currentIndex = 0;
  itemsPerView = 3; // Number of cards visible at once


ngOnInit() {
  if (this.isBrowser) {
    this.updateItemsPerView();
    window.addEventListener('resize', () => this.updateItemsPerView());
  }
}

updateItemsPerView() {
  if (!this.isBrowser) return;
  const width = window.innerWidth;
  if (width < 640) {
    this.itemsPerView = 1; // Mobile
  } else if (width < 1024) {
    this.itemsPerView = 2; // Tablet
  } else {
    this.itemsPerView = 3; // Desktop
  }
}

  get visibleCards() {
    const start = this.currentIndex;
    const end = start + this.itemsPerView;
    return this.cardsData.slice(start, end);
  }

  get canGoPrev() {
    return this.currentIndex > 0;
  }

  get canGoNext() {
    return this.currentIndex < this.cardsData.length - this.itemsPerView;
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
    return Math.ceil(this.cardsData.length - this.itemsPerView + 1);
  }
}




