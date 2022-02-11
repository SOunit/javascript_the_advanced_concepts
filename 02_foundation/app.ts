// Javascript Engine
const isHappy = true;

function jsEngine(code: string) {
  return code.split(/\s+/);
}

const result = jsEngine("variable a = 5");
console.log(result);

// interpreter vs. compiler
function someCalculation(x: number, y: number) {
  return x + y;
}

for (let i = 0; i < 100; i++) {
  const result = someCalculation(4, 5);
  console.log(result);
}

// inline caching
function findUser(user: { firstName: string; lastName: string }) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = { firstName: "Jack", lastName: "Junior" };

// found Jack Junior
console.log(findUser(userData));

// hidden classes
// function Animal<T>(this: { x: T; y: T }, x: T, y: T): void {
//   this.x = x;
//   this.y = y;
// }

class Animal<T> {
  y: T;
  x: T;
  [props: string]: T;

  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }
}

const obj1 = new Animal(3, 5);
const obj2 = new Animal("5", "10");

obj1.a = 30;
obj1.b = 100;
obj2.b = "100";
obj2.a = "30";
delete obj2.a;
// delete obj2.x;

// call stack & memory heap
// allocate memory for number
const number = 10;
const string = "test string";
// allocate memory for an object and it's value
var human: {} = { first: "", last: "" };

human = 5;

function subtractTwo(num: number) {
  return num - 2;
}

// allocate func to memory
function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();

// call stack

// while (true) {
//   calculate();
// }

// memory leak
// 1. global variable
var a = 1;
var b = 1;
var c = 1;
var d = 1;

// 2. event listener
var element = document.getElementById("button")!;
(element as HTMLButtonElement).addEventListener("click", () => {
  console.log("click");
});

// 3. setInterval
setInterval(() => {});

// Javascript Runtime
// go to call stack
console.log("1");
setTimeout(() => {
  // go to call stack, then go to Web API
  console.log("2");
}, 1000);
// go to call stack
console.log("3");

// fix stack overflow by passing function to callback queue
const list = new Array(60000).join("1.1").split(".");
function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    // direct call will cause stack overflow
    // removeItemsFromList

    // using callback queue fix stack overflow error
    setTimeout(removeItemsFromList, 0);
  }
}
removeItemsFromList();
