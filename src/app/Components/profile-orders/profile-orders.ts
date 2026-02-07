import { Component, OnInit, input, inject } from '@angular/core';
import { signal } from '@angular/core';
import { Orders } from '../../Core/Services/orders';
import { Order } from '../../Core/Interfaces/iorder';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-orders',
  imports: [CommonModule],
  templateUrl: './profile-orders.html',
  styleUrl: './profile-orders.css',
})
export class ProfileOrders implements OnInit {
  private ordersService = inject(Orders);

  user = input<any>(null);
  orders = signal<Order[]>([]);
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    const userId = this.user()?.id;

    if (!userId) {
      this.error.set('User not found');
      this.isLoading.set(false);
      return;
    }

    this.ordersService.getOrderByUserId(userId).subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error loading orders:', err);
        this.error.set('Failed to load orders');
        this.isLoading.set(false);
      },
    });
  }
}
