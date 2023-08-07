// 5. Create a class called `PaymentMethod` with the following properties:
//    - `id` (string): The unique identifier for the payment method.
//    - `type` (string): The type of payment method (e.g., credit card, debit card, digital wallet).
//    - `lastFourDigits` (string): The last four digits of the payment method's account number.

export class PaymentMethod {
  constructor(id, type, lastFourDigits) {
    this.id = id;
    this.type = type;
    this.lastFourDigits = lastFourDigits;
  }
}
