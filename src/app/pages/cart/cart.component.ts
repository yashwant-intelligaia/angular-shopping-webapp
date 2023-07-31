import { Component } from '@angular/core';
import { CartItemDataType } from 'src/app/types/product';
import { fetchCartItems, removeCartItem } from 'src/app/utils/storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items: CartItemDataType[] = [];
  total: number = 0;
  constructor() {
    this.updateItems();
  }

  updateItems() {
    this.items = fetchCartItems();
    let newTotal = 0;
    this.items.forEach(({ quantity, price }) => {
      newTotal += quantity * price;
    });
    this.total = newTotal;
  }

  handleRemoveItem(id: number) {
    removeCartItem(id);
    this.updateItems();
  }
}
