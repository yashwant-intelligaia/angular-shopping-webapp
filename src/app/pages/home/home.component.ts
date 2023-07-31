import { Component } from '@angular/core';
// import { data as products } from 'src/app/mocks/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
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
  products: ProductDataType[] = [];
  constructor(private cart: CartService, private product: ProductService) {}

  async fetchProducts() {
    this.product.getProducts().subscribe((data) => {
      const processedData = data.products
        .splice(0, 10)
        .map(({ id, title: name, description, price, thumbnail: src }: any) => {
          return {
            id,
            price,
            description,
            name,
            src,
          };
        });
      this.products = processedData;
      this.handleUpdateList();
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }

  handleUpdateList() {
    const cartItems = fetchCartItems();
    this.cart.setCartItems(cartItems);
    const cartItemIds = cartItems.map(({ id }) => id);
    this.filteredProducts = this.products.map((data) => {
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
