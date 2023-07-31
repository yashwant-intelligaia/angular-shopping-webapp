import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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
  constructor(private cart: CartService) {
    this.updateItems();
  }

  updateItems() {
    const cartItems = fetchCartItems();
    let newTotal = 0;
    cartItems.forEach(({ quantity, price }) => {
      newTotal += quantity * price;
    });
    this.cart.setCartItems(cartItems);
    this.items = cartItems;
    this.total = newTotal;
  }

  handleRemoveItem(id: number) {
    removeCartItem(id);
    this.updateItems();
  }
}
