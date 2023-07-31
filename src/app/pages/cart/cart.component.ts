import { Component } from '@angular/core';
import { ProductDataType } from 'src/app/types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: ProductDataType[] = [];
  constructor() {
    this.items = JSON.parse(localStorage.getItem('ITEMS') || '[]');
  }
}
