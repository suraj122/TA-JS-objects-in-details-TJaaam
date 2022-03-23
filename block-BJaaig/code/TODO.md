## Find the output

For the give code below write the output/error along with the reason!

```js
let user = {
  username: "John",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};

let user2 = {
  username: "Arya",
  sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  },
};
let user3 = {
  username: "Bran",
};

function MainUser() {
  this.username = "Tyrion";
  this.sayHello = function sayHello(message = "Hello") {
    console.log(message + " " + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // Hello John / error
console.log(user2.sayHello()); // Hello Arya / error
console.log(user.sayHello.call(user2)); // Hello Arya / error
console.log(user.sayHello.call(user2, "Hey")); // Hey Arya / error
console.log(user.sayHello.apply(user2, ["Hey"])); // Hey Arya / error
console.log(typeof user.sayHello.bind(user2)); // Function / error
console.log(user.sayHello.bind(user2)()); // Hello Arya / error
console.log(userSayHello()); // output / userSayHello is not defined
console.log(typeof userSayHello.bind(user2)); // output / userSayHello is not defined
console.log(userSayHello.bind(user2)()); // output / userSayHello is not defined
console.log(user3.sayHello()); // output / user3.sayHello is not a function
console.log(userSayHello.apply(user3)); // output / userSayHello is not defined
console.log(userSayHello.call(user3)); // output / userSayHello is not defined
console.log(typeof new MainUser()); // Object / error
console.log(typeof new MainUser()); // Object / error
console.log(new MainUser().sayHello()); // Hello Tyrion / error
console.log(new MainUser().sayHello.call(user2)); // Hello Arya / error
console.log(new MainUser().sayHello.call(user)); // Hello John / error
console.log(new MainUser().sayHello.apply(user, ["Welcome!"])); // Welcome! John / error
```
