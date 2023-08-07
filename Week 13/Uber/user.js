// 1. Create a base class called `User` with the following properties and methods:
//    - Properties:
//      - `id` (string): The unique identifier for the user.
//      - `name` (string): The name of the user.
//      - `email` (string): The email address of the user.
//      - `phoneNumber` (string): The phone number of the user.
//      - `paymentMethods` (array): An array to store the user's linked payment methods.
//    - Methods:
//      - `register()`: Registers a new user with the provided details and creates a new user account.
//      - `login()`: Authenticates the user's credentials and logs them into their account securely.
//      - `updateProfile(newName)`: Updates the user's profile name with the provided new name.
//      - `linkPaymentMethod(paymentMethod)`: Links a new payment method to the user's account.
//      - `viewRideHistory()`: Retrieves the user's ride history, including details of previous rides and associated payments.
import { database } from "./index.js";
import { pastRides } from "./index.js";

export class User {
  constructor(id, name, email, phoneNumber) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.paymentMethods = [];
    this.isLogged = false;
  }

  register = (user) => {
    let userExists = database.some((item) => item.id === user.id);

    if (userExists === false) {
      console.log("User added to the database.");
    } else {
      console.log("User already exists in the database.");
    }
  };

  login = (user) => {
    if (user.isLogged === true) {
      console.log("user is already logged in");
    } else {
      console.log("successfully");
      user.isLogged = true;
    }
  };

  updateProfile = (newName) => {
    this.name = newName;
  };

  linkPaymentMethod = (paymentMethod) => {
    this.paymentMethods = [...this.paymentMethods, paymentMethod];
  };

  viewRideHistory = (id) => {
    const userPastRides = pastRides.filter((element) => {
      return element.user.id === id;
    });

    console.log(userPastRides);
    return userPastRides;
  };
}
