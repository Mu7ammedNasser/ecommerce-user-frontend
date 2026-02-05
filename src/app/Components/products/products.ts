import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgClass],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() product: any = {};
}
    