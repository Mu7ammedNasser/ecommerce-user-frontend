import { Products } from './../products/products';
import { Component, OnInit } from '@angular/core';
import { SideBar } from '../side-bar/side-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Core/Interfaces/iproduct';

@Component({
  selector: 'app-categories',
  imports: [SideBar, Products],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  CategorySlug: string | null = null;
  CategoryTitle = 'All Products';
  filteredProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.CategorySlug = params.get('catSlug');
      this.setCategoryTitle();
      this.loadProducts();
    });
  }

  setCategoryTitle() {
    if (!this.CategorySlug) {
      this.CategoryTitle = 'All Products';
      return;
    }

    const titlesMap: any = {
      computers: 'Computers',
      smartphones: 'Smartphones',
      sound: 'Audio & Sound',
      'gaming-gear': 'Gaming Gear',
    };

    this.CategoryTitle = titlesMap[this.CategorySlug] ?? 'Products';
  }

  loadProducts() {
    if (!this.CategorySlug) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((p) => p.category === this.CategorySlug);
    }
  }

  products: Product[] = [
    // ================= Computers =================
    {
      id: 1,
      title: 'MacBook Pro 16" - M3 Max',
      category: 'computers',
      categoryLabel: 'Computers',
      price: 2499,
      originalPrice: 2999,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 128,
      onSale: false,
    },
    {
      id: 2,
      title: 'Dell XPS 15',
      category: 'computers',
      categoryLabel: 'Computers',
      price: 1899,
      originalPrice: 2299,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 98,
      onSale: true,
    },
    {
      id: 3,
      title: 'HP Spectre x360',
      category: 'computers',
      categoryLabel: 'Computers',
      price: 1699,
      originalPrice: 1999,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 76,
      onSale: false,
    },
    {
      id: 4,
      title: 'Lenovo ThinkPad X1 Carbon',
      category: 'computers',
      categoryLabel: 'Computers',
      price: 1799,
      originalPrice: 2199,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 143,
      onSale: false,
    },
    {
      id: 5,
      title: 'iPhone 15 Pro',
      category: 'smartphones',
      categoryLabel: 'Smartphones',
      price: 1199,
      originalPrice: 1399,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 210,
      onSale: false,
    },
    {
      id: 6,
      title: 'Samsung Galaxy S24 Ultra',
      category: 'smartphones',
      categoryLabel: 'Smartphones',
      price: 1299,
      originalPrice: 1499,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 185,
      onSale: false,
    },
    {
      id: 7,
      title: 'Google Pixel 8 Pro',
      category: 'smartphones',
      categoryLabel: 'Smartphones',
      price: 999,
      originalPrice: 1199,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 92,
      onSale: false,
    },
    {
      id: 8,
      title: 'OnePlus 12',
      category: 'smartphones',
      categoryLabel: 'Smartphones',
      price: 899,
      originalPrice: 1099,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 67,
      onSale: false,
    },
    {
      id: 9,
      title: 'Sony WH-1000XM5',
      category: 'sound',
      categoryLabel: 'Audio & Sound',
      price: 399,
      originalPrice: 499,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 340,
      onSale: false,
    },
    {
      id: 10,
      title: 'Bose QuietComfort Ultra',
      category: 'sound',
      categoryLabel: 'Audio & Sound',
      price: 429,
      originalPrice: 529,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 220,
      onSale: false,
    },
    {
      id: 11,
      title: 'AirPods Pro (2nd Gen)',
      category: 'sound',
      categoryLabel: 'Audio & Sound',
      price: 249,
      originalPrice: 299,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 410,
      onSale: false,
    },
    {
      id: 12,
      title: 'JBL Charge 5 Speaker',
      category: 'sound',
      categoryLabel: 'Audio & Sound',
      price: 179,
      originalPrice: 199,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 305,
      onSale: false,
    },
    {
      id: 13,
      title: 'PlayStation 5 DualSense Controller',
      category: 'gaming-gear',
      categoryLabel: 'Gaming Gear',
      price: 69,
      originalPrice: 79,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 540,
      onSale: false,
    },
    {
      id: 14,
      title: 'Xbox Wireless Controller Series X',
      category: 'gaming-gear',
      categoryLabel: 'Gaming Gear',
      price: 64,
      originalPrice: 74,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 390,
      onSale: false,
    },
    {
      id: 15,
      title: 'Razer BlackWidow V4 Keyboard',
      category: 'gaming-gear',
      categoryLabel: 'Gaming Gear',
      price: 199,
      originalPrice: 299,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 4,
      reviews: 155,
      onSale: false,
    },
    {
      id: 16,
      title: 'Logitech G Pro X Superlight Mouse',
      category: 'gaming-gear',
      categoryLabel: 'Gaming Gear',
      price: 159,
      originalPrice: 199,
      imgUrl: 'https://images.pexels.com/photos/14483025/pexels-photo-14483025.jpeg',
      rating: 5,
      reviews: 480,
      onSale: false,
    },
  ];
}
