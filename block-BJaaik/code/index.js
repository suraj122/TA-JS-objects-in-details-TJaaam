class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    return `${this.name}, ${this.age}, ${this.gender}, eats healthy food`;
  }
  sleep() {
    return `${this.name}, ${this.age}, ${this.gender}, sleep 8 hours  everyday`;
  }
  walk() {
    return `${this.name}, ${this.age}, ${this.gender}, go for a walk in evening`;
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName;
  }
  play() {
    return `${this.name}, ${this.age}, ${this.gender}, loves to play ${this.sportsName}`;
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender);
    this.teamName = teamName;
    this.sportsName = sportsName;
  }
  playCricket() {
    return `${this.name}, ${this.age}, ${this.gender},  is a ${this.sportsName} player of ${this.teamName} team`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName;
  }
  teach() {
    return `${this.name}, ${this.age}, ${this.gender}, Teaches Node at ${this.instituteName}`;
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `${this.name}, ${this.age}, ${this.gender}, is a an ${this.kind} artist`;
  }
}

let person1 = new Person("Rohit Shamrma", 44, "Male");
let person2 = new Player("Rohit Shamrma", 44, "Male", "Cricket");
let person3 = new Cricketer(
  "Rohit Shamrma",
  44,
  "Male",
  "Cricket",
  "Mumbai Indians"
);

let person4 = new Teacher("Suraj", 28, "Male", "AltCampus");
let person5 = new Artist("Sonali", 28, "Female", "Oil Painting");
