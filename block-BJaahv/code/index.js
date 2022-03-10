// Prototypal Pattern

// let userMethods = {
//   getProjects() {
//     return this.noOfProjects;
//   },
//   changeName(newName) {
//     return (this.name = newName);
//   },
//   incrementProject(projects = 1) {
//     return (this.noOfProjects = this.noOfProjects + projects);
//   },
//   decrementProject(projects = 1) {
//     return (this.noOfProjects = this.noOfProjects - projects);
//   },
// };

// function createUser(name, id, noOfProjects) {
//   let user = Object.create(userMethods);
//   user.name = name;
//   user.id = id;
//   user.noOfProjects = noOfProjects;
//   return user;
// }

// Pseudoclassical Pattern

// function CreateUser(name, id, noOfProjects) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects = noOfProjects;
// }

// CreateUser.prototype = {
//   getProjects() {
//     return this.noOfProjects;
//   },
//   changeName(newName) {
//     return (this.name = newName);
//   },
//   incrementProject(projects = 1) {
//     return (this.noOfProjects = this.noOfProjects + projects);
//   },
//   decrementProject(projects = 1) {
//     return (this.noOfProjects = this.noOfProjects - projects);
//   },
// };

// Class Pattern

class User {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects;
  }
  changeName(newName) {
    return (this.name = newName);
  }
  incrementProject(projects = 1) {
    return (this.noOfProjects = this.noOfProjects + projects);
  }
  decrementProject(projects = 1) {
    return (this.noOfProjects = this.noOfProjects - projects);
  }
}

let firstUser = new User("Aman", 1, 24);
let secondUser = new User("Rahul", 2, 10);
