// **Booking Platform - Requirements:**
// 1. Create a `BookingPlatform` class with the following properties and methods:
//    - Properties:
//      - `name` (string): The name of the booking platform.
//      - `listings` (array): An array to store the property listings.
//      - `bookings` (array): An array to store the bookings made on the platform.
//    - Methods:
//      - `addListing(listing)`: Adds a property listing to the platform.
//      - `removeListing(listingId)`: Removes a property listing from the platform based on the listing ID.
//      - `listListings()`: Returns an array of all property listings.
//      - `searchListings(location, startDate, endDate)`: Returns an array of property listings available for a given location and date range.
//      - `createBooking(booking)`: Creates a booking for a property.
//      - `cancelBooking(bookingId)`: Cancels a booking on the platform based on the booking ID.
//      - `listBookings()`: Returns an array of all bookings made on the platform.
// 2. Create a `PropertyListing` class with the following properties and methods:
//    - Properties:
//      - `id` (string): The unique identifier for the property listing.
//      - `title` (string): The title of the property listing.
//      - `location` (string): The location of the property.
//      - `description` (string): The description of the property.
//      - `price` (number): The price per night for the property.
//      - `availability` (array): An array to store the availability dates of the property.
//    - Methods:
//      - `addAvailability(startDate, endDate)`: Adds the specified date range to the availability array of the property listing.
//      - `isAvailable(startDate, endDate)`: Checks if the property is available for the given date range.
// 3. Create a `HotelListing` class that extends the `PropertyListing` class with the following additional properties:
//    - `roomCount` (number): The number of rooms available in the hotel.
//    - `amenities` (array): An array of amenities offered by the hotel.
//    - `rating` (number): The rating of the hotel.
// 4. Create a `VacationRentalListing` class that extends the `PropertyListing` class with the following additional properties:
//    - `bedroomCount` (number): The number of bedrooms in the vacation rental.
//    - `bathroomCount` (number): The number of bathrooms in the vacation rental.
//    - `hasSwimmingPool` (boolean): Indicates if the vacation rental has a swimming pool.
// 5. Create a `Booking` class with the following properties:
//    - `id` (string): The unique identifier for the booking.
//    - `propertyId` (string): The ID of the property being booked.
//    - `guestName` (string): The name of the guest making the booking.
//    - `startDate` (string): The start date of the booking.
//    - `endDate` (string): The end date of the booking.
//    - `totalPrice` (number): The total price of the booking.
// 6. Implement the following functionality in the Vacation Rental Listing class:
//    - `constructor(id, title, location, description, price, bedroomCount, bathroomCount, hasSwimmingPool)`: Initializes the vacation rental listing with the provided details. -->
// 7. Implement the following functionality in the Booking class:
//    - `constructor(id, propertyId, guestName, startDate, endDate, totalPrice)`: Initializes the booking with the provided details.
//    - `calculateTotalPrice()`: Calculates and returns the total price of the booking based on the property's price per night and the number of nights.
// 8. Ensure the code exhibits the use of ES6 features such as classes and inheritance.

import { BookingPlatform } from "./bookingPlatform.js";
import { PropertyListing } from "./propertyListing.js";

const bookingPlatform = new BookingPlatform("Platform");

const propertyListing1 = new PropertyListing(
  1,
  "Sunset View",
  "Maldives",
  "Come and swim with the sharks",
  300
);

propertyListing1.addAvailability("2023-08-01", "2023-08-25");
//propertyListing1.addAvailability("2023-09-01", "2023-09-10");

bookingPlatform.addListings(propertyListing1);

//console.log(propertyListing1.startDate);

//console.log(bookingPlatform.listListings());

// console.log(
//   bookingPlatform.searchListings("Maldives", "2023-08-01", "2023-08-25")
// );

//console.log(propertyListing1.isAvailable("2023-08-04", "2023-08-22"));

console.log(
  bookingPlatform.searchListings("Maldives", "2023-08-02", "2023-08-23")
);
