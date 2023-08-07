// 5. Create a `Booking` class with the following properties:
//    - `id` (string): The unique identifier for the booking.
//    - `propertyId` (string): The ID of the property being booked.
//    - `guestName` (string): The name of the guest making the booking.
//    - `startDate` (string): The start date of the booking.
//    - `endDate` (string): The end date of the booking.
//    - `totalPrice` (number): The total price of the booking.

export class Booking {
  constructor(id, propertyId, guestName, startDate, endDate, totalPrice) {
    this.id = id;
    this.propertyId = propertyId;
    this.guestName = guestName;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.totalPrice = totalPrice;
  }
}
