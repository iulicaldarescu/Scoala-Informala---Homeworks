import { Reservations } from "./reservations.js";
import { Restaurant } from "./restaurant.js";
import { Order } from "./order.js";
import { Guest } from "./guest.js";
import { OnlineOrder } from "./online-order.js";
import { MenuItem } from "./menu-item.js";

const restaurant = new Restaurant("Bucovina", 20);

//reservation creation
const reservation1 = new Reservations("Raul", "27.06", "18:00", 4);
const reservation2 = new Reservations("Iulian", "28.06", "14:00", 2);
const reservation3 = new Reservations("Gusti", "28.06", "10:00", 4);
const reservation4 = new Reservations("Lorena", "28.06", "10:00", 10);
const reservation5 = new Reservations("Ducu", "12.08", "10:00", 1);

//meal creation

const pizzaQF = new MenuItem("Pizza Quattro Formaggi", 30);
const burger = new MenuItem("Burger", 35);
const shawarma = new MenuItem("Shawarma", 21);
const pastaCarbonara = new MenuItem("Pasta Carbonara", 45);
const mamaliga = new MenuItem("Mamaliga cu branza", 26);
const pizzaQS = new MenuItem("Pizza Quattro Stagioni", 30);
const vegetarianPizza = new MenuItem("Vegetarian Pizza", 28);
const lavaCake = new MenuItem("Lava Cake", 18);
const bananaBread = new MenuItem("Banana Bread", 15);
const carrotCake = new MenuItem("Carrot Cake", 19);
const macAndCheese = new MenuItem("Mac and Cheese", 27);
const hotDog = new MenuItem("Hot Dog", 8);
const chickenKebab = new MenuItem("Chicken Kebab", 26);
const beefKebab = new MenuItem("Beef Kebab", 29);
const cocaCola = new MenuItem("Coca Cola", 11);
const fanta = new MenuItem("Fanta", 11);
const cocaColaZero = new MenuItem("Coca Cola Zero", 11);
const redWine = new MenuItem("Red Wine", 20);
const sprite = new MenuItem("Sprite", 11);
const espresso = new MenuItem("Espresso", 6);
const cappucino = new MenuItem("Capuccino", 9);
const hotChocolate = new MenuItem("Hot Chocolate", 12);
const flatWhite = new MenuItem("Flat White", 12);
const americano = new MenuItem("Americano", 11);
const madDog = new MenuItem("Mad Dog", 15);
const beer = new MenuItem("Beer", 8);

restaurant.addMenuItem(pizzaQF);
restaurant.addMenuItem(pizzaQS);
restaurant.addMenuItem(shawarma);
restaurant.addMenuItem(pastaCarbonara);
restaurant.addMenuItem(mamaliga);
restaurant.addMenuItem(burger);
restaurant.addMenuItem(vegetarianPizza);
restaurant.addMenuItem(lavaCake);
restaurant.addMenuItem(bananaBread);
restaurant.addMenuItem(carrotCake);
restaurant.addMenuItem(macAndCheese);
restaurant.addMenuItem(hotDog);
restaurant.addMenuItem(chickenKebab);
restaurant.addMenuItem(beefKebab);
restaurant.addMenuItem(cocaCola);
restaurant.addMenuItem(fanta);
restaurant.addMenuItem(cocaColaZero);
restaurant.addMenuItem(redWine);
restaurant.addMenuItem(sprite);
restaurant.addMenuItem(espresso);
restaurant.addMenuItem(cappucino);
restaurant.addMenuItem(hotChocolate);
restaurant.addMenuItem(flatWhite);
restaurant.addMenuItem(americano);
restaurant.addMenuItem(madDog);
restaurant.addMenuItem(beer);

console.log(restaurant.listMenuItems());

restaurant.addReservation(reservation1);
restaurant.addReservation(reservation2);
restaurant.addReservation(reservation3);
restaurant.addReservation(reservation4);
//restaurant.addReservation(reservation5);

console.log(restaurant.displayReservations());
//console.log(restaurant.capacity);

//restaurant.removeReservation(reservation2);
//console.log(restaurant.checkAvailability());

//restaurant.isFullyBooked();

//console.log(restaurant.getGuestCount());

// console.log(restaurant.sortReservationsAlphabetically());

// //intrebare gusti, de ce functioneaza si cu brackets
// const order1 = new Order("2", [pizzaQF, beer]);
// order1.totalPrice = order1.calculateTotalPrice();

// const order2 = new Order("6", [chickenKebab, americano, sprite, carrotCake]);
// order2.totalPrice = order2.calculateTotalPrice();

// const order3 = new Order("4", [
//   beefKebab,
//   sprite,
//   madDog,
//   beer,
//   pastaCarbonara,
// ]);
// order3.totalPrice = order3.calculateTotalPrice();

// restaurant.addOrder(order1);
// restaurant.addOrder(order2);
// restaurant.addOrder(order3);
// //restaurant.removeOrder("2");

// //console.log(restaurant.orders);

// //console.log(restaurant.getTotalRevenue());

// //console.log(order1.calculateTotalPrice());

// const onlineOrder1 = new OnlineOrder([pizzaQF, pizzaQS], "Str. Trandafirilor");
// onlineOrder1.totalPrice = onlineOrder1.calculateTotalPrice();

// restaurant.addOrder(onlineOrder1);
// console.log(restaurant.orders);
