import { CartItemDataType, ProductDataType } from '../types/product';

const saveCartItems = (items: CartItemDataType[]) => {
  localStorage.setItem('ITEMS', JSON.stringify(items));
  return true;
};

export const fetchCartItems = (): CartItemDataType[] => {
  return JSON.parse(localStorage.getItem('ITEMS') || '[]');
};

export const addCartItem = (item: ProductDataType) => {
  const cartItems = fetchCartItems();
  const cartItemIndex = cartItems.findIndex(
    ({ id: productId }) => item.id === productId
  );
  if (cartItemIndex !== -1) {
    cartItems[cartItemIndex].quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  saveCartItems(cartItems);
};

export const removeCartItem = (id: number) => {
  const updatedCartItems = fetchCartItems().filter(
    ({ id: productId }) => id !== productId
  );
  saveCartItems(updatedCartItems);
};
