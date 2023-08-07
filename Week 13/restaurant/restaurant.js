export class Restaurant {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = [];
    this.menu = [];
    this.orders = [];
  }

  //add reservation to array
  addReservation = (reservation) => {
    if (reservation.guestCount <= this.capacity) {
      console.log(this.capacity);
      this.reservations = [...this.reservations, reservation];
      this.capacity -= reservation.guestCount;
    } else {
      alert("there are no enough seats");
    }
  };

  //display reservations
  displayReservations = () => {
    return this.reservations;
  };

  //remove reservation from array
  removeReservation = (reservation) => {
    this.reservations = this.reservations.filter((item) => {
      return item !== reservation;
    });
    this.capacity += reservation.guestCount;
  };

  //add item to the menu array
  addMenuItem = (meal) => {
    this.menu = [...this.menu, meal];
  };

  removeMenuItem = (meal) => {
    this.menu = this.menu.filter((element) => {
      return element !== meal;
    });
  };

  //show the menu
  listMenuItems = () => {
    return this.menu;
  };

  //check if there are seats available
  checkAvailability = () => {
    return this.capacity;
  };

  //check if all the sears are taken
  isFullyBooked = () => {
    if (nrOfGuests >= this.capacity) {
      console.log("no more seats");
    } else {
      console.log(`there are ${this.capacity} seats available`);
    }
  };

  //get nr of guests are in the restaurant
  getGuestCount = () => {
    const nrOfGuests = this.reservations.reduce((acc, curr) => {
      return acc + curr.guestCount;
    }, 0);
    return nrOfGuests;
  };

  //sort in alphabetically order

  sortReservationsAlphabetically = () => {
    const sortedArray = [...this.reservations].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return sortedArray;
  };

  //add order to orders array
  addOrder = (order) => {
    this.orders = [...this.orders, order];
  };

  //remove order from orders
  removeOrder = (tableNumber) => {
    this.orders = this.orders.filter((element) => {
      return element.tableNumber !== tableNumber;
    });
  };

  //get total revenue
  getTotalRevenue = () => {
    const totalRevenue = this.orders.reduce((acc, curr) => {
      return acc + curr.totalPrice;
    }, 0);
    console.log(`Your total revenue from this orders is ${totalRevenue} RON`);
    return totalRevenue;
  };
}
