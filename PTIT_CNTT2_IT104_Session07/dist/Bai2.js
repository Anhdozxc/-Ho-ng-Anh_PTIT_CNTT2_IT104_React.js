"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 2;
    }
    speedUp() {
        this.speed += 3;
    }
    showSpeed() {
        console.log(`Current speed: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`ID: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}
const myBike = new Bicycle("Mountain Bike", 10, "B01", 6);
myBike.speedUp();
myBike.speedUp();
myBike.showSpeed();
myBike.slowDown();
myBike.showSpeed();
console.log("====== Bicycle Info ======");
myBike.showInfo();
