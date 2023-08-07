// 2. Create a class called `Customer` that inherits from the `User` class and adds the following properties and methods:
//    - Properties:
//      - `loyaltyPoints` (number): The number of loyalty points earned by the customer.
//    - Methods:
//      - `redeemLoyaltyPoints(points)`: Allows the customer to redeem a certain number of loyalty points for rewards or discounts.

import { User } from "./user.js";
import { database } from "./index.js";

export class Customer extends User {
  constructor(id, name, email, phoneNumber, loyaltyPoints) {
    super(id, name, email, phoneNumber);
    this.loyaltyPoints = loyaltyPoints;
    this.paymentMethods = [];
    this.addToDatabase(this);
  }

  addToDatabase = (customer) => {
    database.push(customer);
  };

  redeemLoyaltyPoints = (points) => {
    this.loyaltyPoints += points;
  };

  setPaymentMethod = (type, nr) => {
    type.lastFourDigits = nr;
    this.paymentMethods.push(type);
  };
}
