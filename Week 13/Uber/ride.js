// 4. Create a class called `Ride` with the following properties and methods:
//    - Properties:
//      - `id` (string): The unique identifier for the ride.
//      - `user` (User): The user who requested the ride.
//      - `driver` (Driver): The driver assigned to the ride.
//      - `pickupLocation` (string): The pickup location for the ride.
//      - `destination` (string): The destination for the ride.
//      - `fare` (number): The fare amount for the ride.
//    - Methods:
//      - `requestRide(pickupLocation, destination)`: Initiates a ride request for the user with the provided pickup and destination locations.
//      - `calculateFare()`: Calculates the fare for the ride based on factors such as distance, duration, and any additional charges.
//      - `cancelRide()`: Cancels the ride request and frees up the assigned driver for other requests.
//      - `rateDriver(rating, review)`: Allows the user to rate and provide feedback on the assigned driver.

export class Ride {
  constructor(id, user, driver, pickupLocation, destination, fare) {
    this.id = id;
    this.user = user;
    this.driver = driver;
    this.pickupLocation = pickupLocation;
    this.destination = destination;
    this.fare = fare;
    this.rating = [];
  }

  requestRide(pickupLocation, destination, user) {
    console.log(
      `User ${user.name} requested a ride from ${pickupLocation} to ${destination}`
    );
  }

  calculateFare = (distance) => {
    const pricePerKm = 4;
    return distance * pricePerKm;
  };

  cancelRide = (ride) => {
    console.log(`User ${ride.driver} canceled the ride`);
    ride.driver = undefined;
  };

  rateDriver = (rating, review) => {
    this.rating = [...this.rating, [rating, review]];
  };
}
