// leads to base object
console.log([].__proto__);
console.log([].__proto__.__proto__);

// prototypal inheritance
let dragon = {
  name: "tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let result = dragon.sing();
console.log(result);

let lizard = {
  name: "kiki",
  fight() {
    return 1;
  },
};

// you can borrow function using bind
// but do you add one by one?
// prototypal inheritance comes in!
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

lizard.__proto__ = dragon;
lizard.sing();

result = dragon.isPrototypeOf(lizard);
console.log(result);

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

function a() {}
result = a.hasOwnProperty("call");
console.log(result);

result = a.hasOwnProperty("name");
console.log(result);

let human = { mortal: true };
let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates);
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

// exercise
// in function, "this" pointer decided dynamic
Date.prototype.lastYear = function () {
  console.log("last year");
  return this.getFullYear() - 1;
};

console.log(new Date("1988-10-19").lastYear());

// in arrow function, "this" pointer is decided by lexical
Date.prototype.lastYear = () => {
  console.log("last year");
  return this.getFullYear() - 1;
};

// #bonus
Array.prototype.map = function (): string[] {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(`${this[i]} map`);
  }
  return arr;
};
console.log([1, 2, 3].map());
