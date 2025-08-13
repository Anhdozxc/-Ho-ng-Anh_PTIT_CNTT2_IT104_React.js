"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const myCat = new Cat("Mèo mướp");
myCat.printName();
myCat.makeNoise();
const myDog = new Dog("Cậu vàng");
myDog.printName();
myDog.makeNoise();
