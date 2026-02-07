import { OrderItem } from './iorder-item';

export interface Order {
  id: number;
  userId: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'processing' | 'in-transit' | 'delivered' | 'completed';
  createdAt: string;
}
