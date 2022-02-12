// primitive type
const num = 5;
const bool = true;
const str = "To be or not to be";
const undef = undefined;
const nul = null;
const symbol = Symbol("just me");

// reference type
const obj = {};
const arr: any[] = [];
const func = () => {};

// console.log("num", typeof num);
// console.log("bool", typeof bool);
// console.log("str", typeof str);
// console.log("undef", typeof undef);
// console.log("nul", typeof nul);
// console.log("symbol", typeof symbol);
// console.log("obj", typeof obj);
// console.log("arr", typeof arr);
// console.log("func", typeof func);

// function is an object
function a() {
  return 4;
}
a.hi = "hi";
console.log(a.hi);

// wrapper class
let result: any;
result = true.toString();
console.log(result);
result = Boolean(true).toString();
console.log(result);
result = String("test").toString();
console.log(result);

// check if an object is array or not
result = typeof Math;
console.log(result);

result = Array.isArray([1, 2, 3]);
console.log("Array.isArray", result);

result = Array.isArray({});
console.log("Array.isArray", result);

// primitive and reference
// primitive copy the value to memory address
var a = 5;
var b = a;
b++;
console.log(a, b);

// reference type
let obj1 = { name: "jack" };
let obj2 = obj1;
console.log(obj1, obj2);

obj2.name = "Bec";
console.log(obj1, obj2);

let c = [1, 2, 3];
let d = c;
d.push(398);
console.log(c, d);

// shallow copy
let obj3 = { a: "a", b: "b", c: { deep: "try and copy me" } };
let clone = Object.assign({}, obj3);
let clone2 = { ...clone };
let superClone = JSON.parse(JSON.stringify(obj3));

obj3.a = "999";
obj3.c.deep = "test";
console.log(obj3);
console.log(clone);
console.log(clone2);
console.log(superClone);

// reference exe
(function () {
  const number = 100;
  const string = "Jay";
  let obj1 = {
    value: "a",
  };
  let obj2 = {
    value: "b",
  };
  let obj3 = obj2;

  function change(number, string, obj1, obj2) {
    number = number * 10;
    string = "Pete";
    obj1 = obj2;
    obj2.value = "c";
  }

  change(number, string, obj1, obj2);

  //Guess the outputs here before you run the code:
  console.log(number); // 100
  console.log(string); // Jay
  console.log(obj1.value); // c
})();

// type coercion
result = 1 == "1";
console.log(result);

if (1) {
  console.log(5);
}
