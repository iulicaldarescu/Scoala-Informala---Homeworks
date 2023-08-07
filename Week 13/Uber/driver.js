// 3. Create a class called `Driver` that inherits from the `User` class and adds the following properties and methods:
//    - Properties:
//      - `vehicle` (string): The type of vehicle driven by the driver.
//      - `licensePlate` (string): The license plate number of the driver's vehicle.
//    - Methods:
//      - `register()`: Registers a new driver with the provided details and creates a new driver account.
//      - `updateProfile(newName)`: Updates the driver's profile name with the provided new name.
//      - `acceptRideRequest(ride)`: Accepts the ride request from a user and assigns the driver to the ride.
//      - `cancelRideRequest(ride)`: Cancels the assigned ride request and notifies the user.
//      - `completeRide(ride)`: Marks the assigned ride as completed and calculates the driver's earnings.
//      - `viewEarnings()`: Retrieves the driver's earnings, including details of completed rides.
import { User } from "./user.js";
import { pastRides } from "./index.js";
import { database } from "./index.js";

export class Driver extends User {
  constructor(id, name, email, phoneNumber, vehicle, licensePlate) {
    super(id, name, email, phoneNumber);
    this.vehicle = vehicle;
    this.licensePlate = licensePlate;
    this.earnings = 0;

    this.addToDatabasee(this);
  }

  addToDatabasee = (driver) => {
    database.push(driver);
  };

  updateProfile = (newName) => {
    this.name = newName;
  };

  acceptRideRequest = (ride) => {
    console.log(
      `Ride with the id ${ride.id} requested by the user ${ride.user.name} was accepted`
    );
    ride.driver = this.name;
  };

  cancelRideRequest = (ride) => {
    console.log(
      `Ride with id ${ride.id} was canceled by the user ${ride.user.name}`
    );
  };

  completeRide = (ride) => {
    console.log(
      `Cursa cu id: ${ride.id}, sofer: ${ride.driver}, client: ${ride.user.name} a fost finalizata cu succes`
    );
    pastRides.push(ride);
    this.earnings += ride.fare;
  };

  viewEarnings = (driver) => {
    console.log(this.earnings);
  };
}
