import { Component } from '@angular/core';
import { NewCollection } from '../new-collection/new-collection';
import { FeaturedProducts } from '../featured-products/featured-products';
import { SeasonalSale } from '../seasonal-sale/seasonal-sale';

@Component({
  selector: 'app-home',
  imports: [NewCollection,FeaturedProducts,SeasonalSale],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
