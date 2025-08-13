abstract class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public abstract makeNoise(): void;

  public printName(): void {
    console.log(`Name: ${this.name}`);
  }
}
class Cat extends Animal {
  public makeNoise(): void {
    console.log("meo meo");
  }
}

class Dog extends Animal {
  public makeNoise(): void {
    console.log("gâu gâu");
  }
}

const myCat = new Cat("Mèo mướp");
myCat.printName();
myCat.makeNoise();

const myDog = new Dog("Cậu vàng");
myDog.printName();
myDog.makeNoise();
