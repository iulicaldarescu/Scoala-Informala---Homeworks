// Create a Javascript class called Highway, that has the following properties:
// * vehicleList (array)
// * vignetteCost (number)
// Implement the following methods for the highway:
// * enterHighway
// Create another class called Vehicle, that has the following properties:
// * name (string)
// * runningSpeed (number: Number)
// * driver (Driver)
// Implement the following methods for the Vehicle:
// * increaseSpeed(speed: Number)
// Create another class Bus that inherits Vehicle
// Create another class Car that inherits Vehicle
// Create another class Truck (Tir) that inherits Vehicle
// Create another class Driver, the has the following properties
// * name (String)
// * walletMoney (Number)

// Create another class Police, that inherit Vehicle.
// Implement the following Police methods:
// * checkVehicleSpeed(vehicle: Vehicle)
// The police driver has the following static properties:
// * speedLimitsByVehicleType
// * fineByBehicleType
// Resolve:
// 1. A car needs a driver to be driven.

// 2. When a car enters the highway the driver has to pay the highway fee (the vignette), and the speed is increased

// 3. A police car enters the highway. The driver doesn't pay for the vignette.
// 4. The police start verifying the Highway vehicles and applying fines while checking if the speed
//  limit is reached by each vehicle type. (edited)

function Highway(vignetteCost) {
  this.vignetteCost = vignetteCost;
  this.vehicleList = [];
}

function Vehicle(name, runningSpeed, driver) {
  this.name = name;
  this.runningSpeed = runningSpeed;
  this.driver = driver;
}

function Driver(name, walletMoney) {
  this.name = name;
  this.walletMoney = walletMoney;
}

function Bus(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

function Car(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

function Truck(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

function Police(name, runningSpeed, driver) {
  Vehicle.call(this, name, runningSpeed, driver);
}

Vehicle.prototype.increaseSpeed = function (speed) {
  this.runningSpeed += speed;
};

Bus.prototype = Object.create(Vehicle.prototype);

Car.prototype = Object.create(Vehicle.prototype);
Truck.prototype = Object.create(Vehicle.prototype);
Police.prototype = Object.create(Vehicle.prototype);

const highway = new Highway(10);
const flavius = new Driver("Flavius", 500);
const iulian = new Driver("Iulian", 600);
const raul = new Driver("Raul", 800);
const mitrut = new Driver("Daniel", 1230);

const mercedes = new Car("Mercedes", 170, flavius);
const truck = new Truck("Iveco", 50, iulian);
const vito = new Bus("Vito", 70, raul);
const audiA4 = new Car("Audi", 163, mitrut);

const police = new Police("Bmw", 100);

Highway.prototype.enterHighway = function (vehicle) {
  //chemam functia de verificare a masinii, daca este politie
  if (checkIfPolice(vehicle)) {
    return;
  }

  //verificam daca soferul are bani si adaugam masina pe autostrada in caz pozitiv
  if (vehicle.driver.walletMoney >= this.vignetteCost) {
    vehicle.driver.walletMoney -= this.vignetteCost;
    this.vehicleList.push(vehicle);
    vehicle.increaseSpeed(15);
    console.log(
      vehicle.driver.name +
        " a platit vigneta: " +
        vehicle.driver.name +
        " cu autoturismul " +
        vehicle.name +
        " a intrat pe autostrada"
    );
  } else {
    console.log(vehicle.driver.name + " nu are cascaval");
    return;
  }
};

highway.enterHighway(mercedes);
highway.enterHighway(truck);
highway.enterHighway(vito);
highway.enterHighway(police);
highway.enterHighway(audiA4);

console.log(highway.vehicleList);

//verificam daca masina este politie
function checkIfPolice(vehicle) {
  if (vehicle instanceof Police) {
    highway.vehicleList.push(vehicle);
    console.log(vehicle.name + " a intrat pe autostrada");
    return true;
  }
}

// 2 obiecte care contin viteza maxima pt fiecare masina si amenzile respective
const speedLimitsByVehicleType = {
  Car: 120,
  Bus: 90,
  Truck: 60,
};

const fineByVehicleType = {
  Car: 90,
  Bus: 50,
  Truck: 40,
};

// clasa sofer politie
function PoliceDriver(speedLimitsByVehicleType, fineByVehicleType) {
  this.speedLimitsByVehicleType = speedLimitsByVehicleType;
  this.fineByVehicleType = fineByVehicleType;
}

//creem soferul politist
const gusti = new PoliceDriver(speedLimitsByVehicleType, fineByVehicleType);

PoliceDriver.prototype.checkVehicleSpeed = function (vehicle) {
  if (
    vehicle instanceof Car &&
    vehicle.runningSpeed > this.speedLimitsByVehicleType.Car
  ) {
    vehicle.driver.walletMoney -= this.fineByVehicleType.Car;
    console.log(
      vehicle.driver.name +
        " a fost amendat cu " +
        this.fineByVehicleType.Car +
        " EUR"
    );
  } else if (
    vehicle instanceof Bus &&
    vehicle.runningSpeed > this.speedLimitsByVehicleType.Bus
  ) {
    vehicle.driver.walletMoney -= this.fineByVehicleType.Bus;
    console.log(
      vehicle.driver.name +
        " a fost amendat cu " +
        this.fineByVehicleType.Bus +
        " EUR"
    );
  } else if (vehicle instanceof Truck && this.speedLimitsByVehicleType.Truck) {
    vehicle.driver.walletMoney -= this.fineByVehicleType.Truck;
    console.log(
      vehicle.driver.name +
        " a fost amendat cu " +
        this.fineByVehicleType.Truck +
        " EUR"
    );
  }
};

gusti.checkVehicleSpeed(audiA4);
gusti.checkVehicleSpeed(truck);
console.log(truck.driver.walletMoney);
console.log(highway.vehicleList);
