// Animals

let animalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`;
  },
};

// Dog Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(changeName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
  changeColor: function (color) {
    this.color = color;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(dogMethods, animalMethods);

// Cat Methods:

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  changeName: function (name) {
    this.name = name;
    return this.name;
  },
  changeColorOfEyes: function (color) {
    this.color = color;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes} color. I can also meow meow`;
  },
};

Object.setPrototypeOf(catMethods, animalMethods);

// Create Animal
function createAnimal(location, numberOfLegs) {
  let animal = Object.create(animalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

// Create Dog

function createDog(location, numberOfLegs, name, color) {
  let dog = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(dog, dogMethods);
  dog.name = name;
  dog.color = color;
  return dog;
}

// Create Cat

function createCats(location, numberOfLegs, name, colorOfEyes) {
  let cat = createAnimal(location, numberOfLegs);
  Object.setPrototypeOf(cat, catMethods);
  cat.name = name;
  cat.colorOfEyes = colorOfEyes;
  return cat;
}

let animal1 = createAnimal("Australia", 2);
let animal2 = createDog("AltCampus", 4, "Pochi", "Black");

let animal3 = createCats("AltCampus", 3, "PussyCat", "Blue");
