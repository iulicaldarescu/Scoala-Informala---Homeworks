export class Order {
  constructor(tableNumber, items, totalPrice) {
    this.tableNumber = tableNumber;
    this.items = items;
    this.totalPrice = totalPrice;
  }

  calculateTotalPrice = () => {
    const totalOrderPrice = this.items.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
    return totalOrderPrice;
  };
}
