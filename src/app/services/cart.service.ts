import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItemDataType } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSource = new Subject<CartItemDataType[]>();
  cartItems = this.cartItemsSource.asObservable();
  constructor() {}

  setCartItems(items: CartItemDataType[]) {
    this.cartItemsSource.next(items);
  }
}
