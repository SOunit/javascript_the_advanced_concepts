// functions are object
// execution context
// this, arguments

let result: any;

// use function 1
function one() {
  return 1;
}

result = one();
console.log(result);

// use function 2
const obj = {
  two() {
    return 2;
  },
};
result = obj.two();
console.log(result);

// call function 3
function three() {
  return 3;
}
result = three.call(this);
console.log(result);

// call function 4
// const four = new Function("return 4");
const four = new Function("num", "return num");
result = four(4);
console.log(result);

// callable object
function woohoo() {
  console.log("wooohooo");
}
woohoo.yell = "ahhhhhhhhhhhhhhh";

// pseudo code for idea of callable object
// const specialObj = {
//   yell: "ahhhhhhhhhhh",
//   name: "woohoo",
//   (): console.log('whoohoo')
// };

// function has name, it's object!
result = woohoo.name;
console.log(result);

// functions are the first class citizens in JS
// 1.
var staff = function () {};

// 2.
function a(fn: Function) {
  fn();
}
a(function () {
  console.log("Hi there");
});

// 3.
function b() {
  return function c() {
    console.log("bye");
  };
}

var d = b();
d();

function a(param = 6) {
  console.log(param);
}

a();

// HOF
// why HOF is useful?

// bad approach, violate the rule, DRY
function letAdamLogin() {
  let arr = [];
  for (let i = 0; i < 999999; i++) {
    arr.push(i);
  }
  return "Access Granted to Adam";
}
result = letAdamLogin();
console.log(result);

function letEvaLogin() {
  let arr = [];
  for (let i = 0; i < 999999; i++) {
    arr.push(i);
  }
  return "Access Granted to Eva";
}
result = letEvaLogin();
console.log(result);

const giveAccessTo = (name: string) => "Access Granted to " + name;

// better approach with argument
function letUserLogin(user: string) {
  let arr = [];
  for (let i = 0; i < 999999; i++) {
    arr.push(i);
  }
  return giveAccessTo(user);
}

result = letUserLogin("Adam");
console.log(result);
result = letUserLogin("Eva");
console.log(result);

function authenticate(person: Person, verify: number) {
  let arr = [];
  for (let i = 0; i < verify; i++) {
    arr.push(i);
  }
  return giveAccessTo(person.name);
}

type Person = {
  name: string;
  level: string;
};

function sing(person: Person) {
  return `la la la ${person.name}`;
}

function letPerson(person: Person, fn: Function) {
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}
result = letPerson({ name: "Ran", level: "user" }, authenticate);
console.log(result);
result = letPerson({ name: "Jack", level: "admin" }, authenticate);
console.log(result);
result = letPerson({ name: "Jack", level: "admin" }, sing);
console.log(result);

const multiplyBy = (baseNum: number, rate: number) => {
  return baseNum * rate;
};
result = multiplyBy(3, 2);
console.log(result);
