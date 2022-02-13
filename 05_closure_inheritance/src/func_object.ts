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
