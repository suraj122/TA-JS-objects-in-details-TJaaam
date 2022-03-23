class Animal {
  constructor(location, numberOfLegs) {
    this.location = location;
    this.numberOfLegs = numberOfLegs;
  }
  eat() {
    console.log(`I live in ${this.location} and I can eat`);
  }
  changeLocation(newLocation) {
    this.location = newLocation;
    return this.location;
  }
  summary() {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  }
}

class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }
  bark() {
    alert(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.color = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  }
}
class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }
  meow() {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}

let rat = new Animal("India", 4);
let pochi = new Dog("AltCampus", 4, "Pochi", "Black");
let maggie = new Cat("India", 4, "Maggie", "Blue");
