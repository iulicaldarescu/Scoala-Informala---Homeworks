// #1: Online Shopping System
// Create a JavaScript class called Product that has the following properties:
// name (string)
// price (number)
// Create another class called Cart that has the following properties:
// products (array of Product objects)
// Implement the following methods for the Cart class:
// addProduct(product: Product): Add a product to the cart.
// removeProduct(product: Product): Remove a product from the cart.
// getTotalPrice(): number: Calculate and return the total price of all products in the cart.
// Now, create a subclass called DiscountedProduct that extends the Product class. This class should have an additional property:
// discount (number)
// Override the getPrice() method in the DiscountedProduct class to return the price after applying the discount.
// Finally, create an instance of the Cart class and demonstrate the usage of all the methods, including adding regular and discounted products to the cart, removing products, and calculating the total price.

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Cart(products) {
//   this.products = products;
// }

// //method to get the price of the object created
// Product.prototype.getPrice = function () {
//   const price = this.price;
//   return price;
// };

// //add product

// Cart.prototype.addProduct = function (product) {
//   this.products.push(product);
// };

// //remove product
// Cart.prototype.removeProduct = function (product) {
//   this.products.splice(product, 1);
// };

// //intrebare
// //get total price
// Cart.prototype.getTotalPrice = function () {
//   let totalPrice = 0;
//   for (let i = 0; i < this.products.length; i++) {
//     totalPrice += this.products[i].getPrice();
//   }
//   return totalPrice;
// };

// //create products

// const product1 = new Product("iphone", 1200);
// const product2 = new Product("macbook", 2500);

// //create new cart
// const cart1 = new Cart([]);

// cart1.addProduct(product1);
// cart1.addProduct(product2);

// cart1.getTotalPrice();

// //create subclass

// function DiscountedProduct(name, price, discount) {
//   Product.call(this, name, price, discount);
//   this.discount = discount;
// }

// DiscountedProduct.prototype = Object.create(Product.prototype);

// //discounted getPrice
// DiscountedProduct.prototype.getPrice = function () {
//   const price = this.price - this.discount;

//   return price;
// };

// //create obj
// const product3 = new DiscountedProduct("airpods", 560, 20);

// cart1.addProduct(product3);

// console.log(product1.getPrice());
// console.log(product2.getPrice());
// console.log(product3.getPrice());

// console.log(cart1.getTotalPrice());

// #2: Bank Account Management System
// Create a JavaScript class called BankAccount that has the following properties:
// accountNumber (string)
// balance (number)
// Implement the following methods for the BankAccount class:

// deposit(amount: number): Add the given amount to the account balance.

// withdraw(amount: number): Subtract the given amount from the account balance.
// getBalance(): number: Return the current balance.
// Now, create a subclass called SavingsAccount that extends the BankAccount class. This class should have an additional property:
// interestRate (number)
// Override the withdraw() method in the SavingsAccount class to prevent withdrawing more than the account balance.
// Next, create a subclass called CheckingAccount that extends the BankAccount class. This class should have an additional property:
// transactionLimit (number)
// Override the withdraw() method in the CheckingAccount class to enforce the transaction limit. If a withdrawal exceeds the limit, display an error message.
// Finally, create instances of the SavingsAccount and CheckingAccount classes and demonstrate the usage of all the methods, including depositing, withdrawing, and checking the balance.

// function BankAccount(accountNumber, balance) {
//   this.accountNumber = accountNumber;
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// BankAccount.prototype.getBalance = function () {
//   return this.balance;
// };

// const account1 = new BankAccount("1", 0);

// account1.deposit(100);
// account1.withdraw(25);
// account1.deposit(75);

// console.log(account1.getBalance());

// function SavingsAccount(accountNumber, balance, interestRate) {
//   BankAccount.call(this, accountNumber, balance);
//   this.interestRate = interestRate;
// }

// SavingsAccount.prototype = Object.create(BankAccount.prototype);

// SavingsAccount.prototype.getBalance = function () {
//   return this.balance;
// };

// SavingsAccount.prototype.withdraw = function (mainAccount, amount) {
//   if (amount > mainAccount.getBalance()) {
//     console.log("You don't have enough money in the account");
//   } else {
//     console.log("Withdrawl completed succesfully");
//     mainAccount.balance -= amount;
//   }
// };

// const savings1 = new SavingsAccount(
//   account1.accountNumber,
//   account1.balance,
//   5
// );

// savings1.withdraw(account1, 100);

// function CheckingAccount(accountNumber, balance, transactionLimit) {
//   BankAccount.call(this);
//   this.transactionLimit = transactionLimit;
// }

// CheckingAccount.prototype = Object.create(BankAccount.prototype);

// const CheckingAccount1 = new CheckingAccount(
//   account1.accountNumber,
//   account1.balance,
//   50
// );

// CheckingAccount.prototype.withdraw = function (account, amount) {
//   if (amount > account.transactionLimit) {
//     console.log("Limit exceeded");
//   } else {
//     console.log("Success");
//     account.balance -= amount;
//   }
// };

// CheckingAccount1.withdraw(CheckingAccount1, 80);

// console.log(savings1.getBalance());
// savings1.deposit(100);
// console.log(savings1.getBalance());
