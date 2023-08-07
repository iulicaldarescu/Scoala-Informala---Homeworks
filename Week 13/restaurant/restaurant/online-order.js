import { Order } from "./order.js";

export class OnlineOrder extends Order {
  constructor(items, totalPrice, deliveryAddress) {
    super(undefined, items, totalPrice, deliveryAddress);
    this.deliveryAddress = deliveryAddress;
  }
}
