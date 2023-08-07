import { Reservations } from "./reservations.js";

export class Guest extends Reservations {
  constructor(name, date, time, guestCount, specialRequests) {
    super(name, date, time, guestCount);
    this.specialRequests = specialRequests;
  }
}
