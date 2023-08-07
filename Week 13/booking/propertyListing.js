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

export class PropertyListing {
  constructor(id, title, location, description, price) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.description = description;
    this.price = price;
    this.availability = [];
  }

  // addAvailability = (startDate, endDate) => {
  //   this.availability = [...this.availability, [startDate, endDate]];
  // };

  // addAvailability = (startDate, endDate) => {
  //   this.availability = [
  //     ...this.availability,
  //     [new Date(startDate), new Date(endDate)],
  //   ];
  // };

  addAvailability = (startDate, endDate) => {
    const available = {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    };

    this.startDate = available.startDate;
    this.endDate = available.endDate;

    this.availability = [...this.availability, available];
  };

  isAvailable = (startDate, endDate) => {
    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);
    //console.log(this.availability);

    for (const element of this.availability) {
      //console.log(element);

      if (
        parsedStartDate.getTime() >= element.startDate.getTime() &&
        parsedEndDate.getTime() <= element.endDate.getTime()
      ) {
        return true;
      } else {
        return false;
      }
    }

    // this.availability.for((element) => {
    //   console.log(element);

    //   if (
    //     parsedStartDate.getTime() >= element.startDate.getTime() &&
    //     parsedEndDate.getTime() <= element.endDate.getTime()
    //   ) {
    //     console.log("it works");
    //     return true;
    //   } else {
    //     console.log("does not");
    //     return false;
    //   }
    // });

    // if (
    //   parsedStartDate.getTime() >= this.availability[0].startDate.getTime() &&
    //   parsedEndDate.getTime() <= this.availability[0].endDate.getTime()
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
  };
}
