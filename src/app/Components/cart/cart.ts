import { Component, signal, OnInit, computed, WritableSignal } from '@angular/core';
import { CartItemsList } from "../cart-items-list/cart-items-list";
import { CartSummary } from "../cart-summary/cart-summary";
import { CartEmpty } from '../cart-empty/cart-empty';
import { CartService } from '../../Core/Services/cartService';
import { ProductService } from '../../Core/Services/product-service';

@Component({
  selector: 'app-cart',
  imports: [CartItemsList, CartSummary, CartEmpty],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart implements OnInit {

  cart: WritableSignal<any | null> = signal<any | null>(null);
  allProducts: WritableSignal<any[]> = signal<any[]>([]);
  isLoading = signal<boolean>(true);

  ProductIds = computed(() => {
    const items = this.cart()?.items ?? [];
    return items.map((item: any) => item.productId);
  });

  cartItems = computed(() => {
    return this.cart()?.items ?? [];
  });

  productsInCart = computed(() => {
    const productIds = this.ProductIds();
    const products = this.allProducts();

    if (productIds.length === 0 || products.length === 0) {
      return [];
    }

    return products.filter((p: any) => productIds.includes(Number(p.id)));
  });





  // IMPORTANT: Merge cart items with product details
  cartItemsWithDetails = computed(() => {
    const cartItems = this.cartItems();
    const products = this.allProducts();

    if (cartItems.length === 0 || products.length === 0) {
      return [];
    }

    return cartItems.map((item: any) => {
      const product = products.find((p: any) => Number(p.id) === item.productId);

      if (!product) return null;

      return {
        ...product,
        productId: item.productId,
        quantity: item.quantity,
        imageUrl: product.imgUrl, // Map imgUrl to imageUrl for your template
        subtotal: product.price * item.quantity
      };
    }).filter((item: any) => item !== null); // Remove any items where product wasn't found
  });

  constructor(private service: CartService, private productService: ProductService) { }

  ngOnInit() {
    let cartLoaded = false;
    let productsLoaded = false;

    const checkIfBothLoaded = () => {
      if (cartLoaded && productsLoaded) {
        this.isLoading.set(false);
      }
    };

    // Fetch cart data
    this.service.getCartByUserId("1").subscribe({
      next: (data: any[]) => {
        this.cart.set(data[0]);
        cartLoaded = true;
        checkIfBothLoaded();
        console.log("Cart loaded:", this.cart());
      },
      error: (err) => {
        console.error("Error fetching cart:", err);
        cartLoaded = true;
        checkIfBothLoaded();
      }
    });

    // Fetch all products
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.allProducts.set(data);
        productsLoaded = true;
        checkIfBothLoaded();
        console.log("All products loaded:", data);
      },
      error: (err) => {
        console.error("Error fetching products:", err);
        productsLoaded = true;
        checkIfBothLoaded();
      }
    });
  }




  onQuantityChange(event: { productId: number, quantity: number }) {
    const currentCart = this.cart();
    if (!currentCart) return;

    console.log('Quantity change event:', event); // Debug log

    // Update local state optimistically
    // Convert productId to number for comparison since cart items have numeric productId
    const updatedItems = currentCart.items.map((item: any) =>
      Number(item.productId) === Number(event.productId)
        ? { ...item, quantity: event.quantity }
        : item
    );

    console.log('Updated items:', updatedItems); // Debug log

    // Update backend with entire cart object to preserve all properties (including userId)
    const updatedCart = { ...currentCart, items: updatedItems };
    this.service.updateCart(currentCart.id, updatedCart).subscribe({
      next: (response) => {
        // Update local signal after successful backend update
        this.cart.set(updatedCart);
        console.log('Cart updated successfully', response);
      },
      error: (err) => {
        console.error('Error updating cart:', err);
      }
    });
  }

  onItemRemove(productId: number) {
    const currentCart = this.cart();
    if (!currentCart) return;

    console.log('Remove item event:', productId); // Debug log

    // Filter out the removed item
    const updatedItems = currentCart.items.filter(
      (item: any) => Number(item.productId) !== Number(productId)
    );

    console.log('Updated items after removal:', updatedItems); // Debug log

    // Update backend with entire cart object to preserve all properties (including userId)
    const updatedCart = { ...currentCart, items: updatedItems };
    this.service.updateCart(currentCart.id, updatedCart).subscribe({
      next: (response) => {
        // Update local signal after successful backend update
        this.cart.set(updatedCart);
        console.log('Item removed successfully', response);
      },
      error: (err) => {
        console.error('Error removing item:', err);
      }
    });
  }

}