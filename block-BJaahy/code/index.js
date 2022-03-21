// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
// class Square {
//   constructor(width, height) {
//     width: width;
//     height: height;
//   }
// }

// - Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`
// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   description = function (params) {
//     alert(`The square is ${this.width} x ${this.height}`);
//   };
// }

// - Create another method named `calcArea` that will return the area of the square.
// let calcArea = new Square(10, 10);

// - Create a getter method named `area` that will return area of the square.
// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   description = function (params) {
//     alert(`The square is ${this.width} x ${this.height}`);
//   };
//   get area() {
//     return `Area of square is ${this.width * this.height}`;
//   }
// }

// let calcArea = new Square(10, 10);

// - Create a setter method named `area` that will accept a value (the value will be the area of any square like 124). Based on the input value update the `width` and `height` of the square.(The width and the height will be updated to 12 (12 \* 12 = 124))

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   description = function (params) {
//     alert(`The square is ${this.width} x ${this.height}`);
//   };

//   calcArea() {
//     return this.width * this.height;
//   }

//   set area(value) {
//     this.width = Math.sqrt(value);
//     this.height = Math.sqrt(value);
//   }

//   get area() {
//     return this.width * this.height;
//   }
// }

// - Create a static method named `isEqual` which accepts two square instance (when you create a new object using the class). If the area of both square is same the method should return `true` or `false`. (Static methods are called directly on the class not in the instance)

// class Square {
//   constructor(side) {
//     this.width = side;
//     this.height = side;
//   }
//   description = function (params) {
//     alert(`The square is ${this.width} x ${this.height}`);
//   };

//   calcArea() {
//     return this.width * this.height;
//   }

//   set area(value) {
//     this.width = Math.sqrt(value);
//     this.height = Math.sqrt(value);
//   }

//   get area() {
//     return this.width * this.height;
//   }

//   static isEqual(a, b) {
//     return a.width * a.height === b.width * b.height;
//   }
// }

// - Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
// let square1 = new Square(200);
// let square2 = new Square(100);

// - Check the `area` getter method on both square.

// - Check the `isEqual` method and pass the two instance you created above.

// ## User Class

// - Create a class named `User` that accepts `firstName` and `lastName` property

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// - Create a getter method named `fullName` that will return the full name of the person.
// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return this.firstName + this.lastName;
//   }
// }
// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`)

// class User {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return this.firstName + this.lastName;
//   }
//   set fullName(value) {
//     if (value.length < 5) {
//       alert("Full name should be more than 5 characters");
//     } else {
//       let arr = value.split(" ");
//       this.firstName = arr[0];
//       this.lastName = arr[1];
//     }
//   }
// }

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    if (value.length < 5) {
      alert("Full name should be more than 5 characters");
    } else {
      let arr = value.split(" ");
      this.firstName = arr[0];
      this.lastName = arr[1];
    }
  }
  nameContains(str) {
    return this.fullName.includes(str);
  }
}

// - Create two instance of the `User` class
let user1 = new User("Arya", "Stark");
let user2 = new User("John", "Stark");

// - Check by using the `fullName` setter method with name bigger than 5 characters.

// - Check by using the `fullName` setter method with name less than 5 characters.

// - Check the `fullName` using getter

// - Check the `nameContains` method
