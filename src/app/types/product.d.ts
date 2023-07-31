export interface ProductDataType {
  name: string;
  price: number;
  description: string;
  id: number;
  src: string;
}

export interface CartItemDataType extends ProductDataType {
  quantity: number;
}
