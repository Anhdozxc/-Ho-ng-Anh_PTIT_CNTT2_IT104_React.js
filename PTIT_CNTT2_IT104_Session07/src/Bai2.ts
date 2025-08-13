class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;
  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  public slowDown(): void {
    this.speed -= 2;
  }
  public speedUp(): void {
    this.speed += 3;
  }
  public showSpeed(): void {
    console.log(`Current speed: ${this.speed}`);
  }
}
class Bicycle extends Vehicle {
  private gear: number;

  constructor(name: string, speed: number, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  public showInfo(): void {
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
