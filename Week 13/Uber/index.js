import { User } from "./user.js";
import { Customer } from "./customer.js";
import { Driver } from "./driver.js";
import { Ride } from "./ride.js";
import { PaymentMethod } from "./payment-method.js";

export let database = [];
export let pastRides = [];

const customer1 = new Customer(
  String(database.length + 1),
  "Mihai",
  "ex@gmail.com",
  "0745665688",
  0
);

const customer2 = new Customer(
  String(database.length + 1),
  "Lucian",
  "213@gmail.com",
  "0744778995",
  0
);

const driver1 = new Driver(
  String(database.length + 1),
  "Andreea",
  "andreea@gmail.com",
  "074855863",
  0
);
const driver2 = new Driver(
  String(database.length + 1),
  "Raul",
  "raul@gmail.com",
  "07483463",
  0
);

const user = new User(
  String(database.length + 1),
  "Dumitru",
  "kkk@yahoo.com",
  "0788222212"
);

const ride1 = new Ride("1", customer1, undefined, "Cluj", "Timisoara", null);
ride1.fare = ride1.calculateFare(300);
const ride2 = new Ride("2", customer1, undefined, "Suceava", "Iasi", null);
ride2.fare = ride2.calculateFare(200);

const visa = new PaymentMethod("1", "credit card", undefined);
const revolut = new PaymentMethod("2", "revolut", undefined);

customer1.setPaymentMethod(visa, "1234");
customer1.setPaymentMethod(revolut, "2343");
console.log(customer1.paymentMethods);

driver1.register(driver1);
driver1.login(driver1);
driver1.login(driver1);

// driver1.register(driver1);
// driver1.login(driver1);
// driver1.login(driver1);

console.log(ride1.fare);

ride1.requestRide(ride1.pickupLocation, ride1.destination, customer1);
driver1.acceptRideRequest(ride1);

//ride1.cancelRide(ride1);

driver1.completeRide(ride1);
console.log(driver1.earnings);

customer1.viewRideHistory("1");

console.log(database);
