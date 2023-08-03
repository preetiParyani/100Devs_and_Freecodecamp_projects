// let user = {
//     name: 'preeti'
// }

// user.age = prompt(`${user.name} please enter your age`)

// console.log (user.name)
// console.log(user.age)

// executes the body for each key among object properties
//

let user = {};
user.name = "john";
user.surname = "smith";
user.name = "pete";
// console.log(user.name)
delete user.name;
// console.log(user)

let obj = {};
function isEmpty(obj) {
  for (let key in obj) {
    alert(false);
  }
  alert(true);
}
isEmpty(obj);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] == "number") {
      obj[prop] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);

// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism
class Contractor {
  constructor(name, role) {
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100Devs!`);
  }
}
class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }
}
class Back extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`
    );
  }
}
let bob = new Contractor("Bob", "Front-end");
let simba = new Front("Simba", "Front-end", "React");
let machi = new Back("The Machine", "Back-end", "Node");

let agency = [bob, simba, machi];

for (person of agency) {
  person.sayHello();
}
