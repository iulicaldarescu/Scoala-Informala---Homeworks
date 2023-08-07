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

export class BookingPlatform {
  constructor(name) {
    this.name = name;
    this.listings = [];
    this.bookings = [];
  }

  addListings = (listing) => {
    this.listings = [...this.listings, listing];
  };

  removeListing = (listingId) => {
    this.listings = this.listings.filter((item) => {
      return item.id !== listingId;
    });
  };

  listListings = () => {
    const allListings = this.listings.map((item) => {
      return item;
    });
    return allListings;
  };

  searchListings = (location, startDate, endDate) => {
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);
    const filteredArray = this.listings.find((element) => {
      return (
        element.location === location,
        element.startDate.getTime() <= parsedStartDate.getTime(),
        element.endDate.getTime() >= parsedEndDate.getTime()
      );
    });
    return filteredArray;
  };
}
