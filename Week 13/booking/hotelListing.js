//3. Create a `HotelListing` class that extends the `PropertyListing` class with the following additional properties:
//    - `roomCount` (number): The number of rooms available in the hotel.
//    - `amenities` (array): An array of amenities offered by the hotel.
//    - `rating` (number): The rating of the hotel.

import { PropertyListing } from "./propertyListing.js";

export class HotelListing extends PropertyListing {
  constructor(
    id,
    title,
    location,
    description,
    price,
    roomCount,
    amenities,
    rating
  ) {
    super(id, title, location, description, price);
    this.roomCount = roomCount;
    this.amenities = amenities;
    this.rating = rating;
  }
}
