// 4. Create a `VacationRentalListing` class that extends the `PropertyListing` class with the following additional properties:
//    - `bedroomCount` (number): The number of bedrooms in the vacation rental.
//    - `bathroomCount` (number): The number of bathrooms in the vacation rental.
//    - `hasSwimmingPool` (boolean): Indicates if the vacation rental has a swimming pool.

import { PropertyListing } from "./propertyListing.js";

export class VacationRentalListing extends PropertyListing {
  constructor(
    id,
    title,
    location,
    description,
    price,
    bedroomCount,
    bathroomCount,
    hasSwimmingPool
  ) {
    super(id, title, location, description, price);
    this.bedroomCount = bedroomCount;
    this.bathroomCount = bathroomCount;
    this.hasSwimmingPool = hasSwimmingPool;
  }
}
