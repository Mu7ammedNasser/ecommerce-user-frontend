export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  imgUrl: string;
  price: number;
  originalPrice: number;
  rating: number;
  quantity: number;
  reviews: number;
  onSale: boolean;
}
