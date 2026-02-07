import { Products } from './../products/products';
import { Component, OnInit, inject, signal } from '@angular/core';
import { SideBar } from '../side-bar/side-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../Core/Interfaces/iproduct';
import { Categories as CategoriesService } from '../../Core/Services/categories';

@Component({
  selector: 'app-categories',
  imports: [SideBar, Products],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {
  //inject service to get products by category from json server
  private categoriesService = inject(CategoriesService);
  private activeRoute = inject(ActivatedRoute);

  CategorySlug = signal<string | null>(null);
  CategoryTitle = signal<string>('All Products');
  filteredProducts = signal<Product[]>([]);

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.CategorySlug.set(params.get('catSlug'));
      this.setCategoryTitle();
      this.loadProducts();
    });
  }

  setCategoryTitle() {
    const slug = this.CategorySlug();
    if (!slug) {
      this.CategoryTitle.set('All Products');
      return;
    }

    const titlesMap: any = {
      computers: 'Computers',
      smartphones: 'Smartphones',
      sound: 'Audio & Sound',
      'gaming-gear': 'Gaming Gear',
    };

    this.CategoryTitle.set(titlesMap[slug]);
  }

  loadProducts() {
    const slug = this.CategorySlug();

    if (!slug) {
      this.categoriesService.getAllProducts().subscribe({
        next: (products) => {
          this.filteredProducts.set(products);
        },
        error: (err) => {
          console.log('Error loading products', err);
        },
      });
    } else {
      this.categoriesService.getProductsByCategory(slug).subscribe({
        next: (products) => {
          this.filteredProducts.set(products);
        },
        error: (err) => {
          console.log(`Error loading products for this ${slug} `, err);
        },
      });
    }
  }
}
