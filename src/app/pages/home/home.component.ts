import { Component } from '@angular/core';
import { data as products } from 'src/app/mocks/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductDataType } from 'src/app/types/product';
import {
  addCartItem,
  fetchCartItems,
  removeCartItem,
} from 'src/app/utils/storage';

interface FilteredProductDataType extends ProductDataType {
  isInCart?: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  filteredProducts: FilteredProductDataType[] = [];
  constructor(private cart: CartService) {
    this.handleUpdateList();
  }

  handleUpdateList() {
    const cartItems = fetchCartItems();
    this.cart.setCartItems(cartItems);
    const cartItemIds = cartItems.map(({ id }) => id);
    this.filteredProducts = products.map((data) => {
      return {
        ...data,
        isInCart: cartItemIds.includes(data.id),
      };
    });
  }

  handleAddProductToCart(id: number) {
    const product = this.filteredProducts.find(
      ({ id: productId }) => id === productId
    );
    if (product) {
      delete product.isInCart;
      addCartItem(product);
      this.handleUpdateList();
    }
  }

  handleRemoveProductFromCart(id: number) {
    removeCartItem(id);
    this.handleUpdateList();
  }
}
