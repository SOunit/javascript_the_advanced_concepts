// console.log(window);

// this sample
console.log(this);
console.log(window);
var a = function (this: object) {
  console.log("this", this);
};
window.a = a;
console.log(window.a());

// this
var person = {
  name: "Jack",
  a: () => {},
};

person.a = a;
console.log(person.a());

var testArg = 10;
function b(testArg: number) {
  console.log(testArg);
}
b(testArg);

const obj = {
  name: "Bec",
  sing: function () {
    return "lalala " + this.name;
  },
  singAgain() {
    return this.sing() + "!";
  },
};

let result = obj.sing();
console.log(result);

result = obj.singAgain();
console.log(result);

console.log(this);

// this is dynamic scoped
// this is decided when function is called
const obj2 = {
  name: "Jack",
  sing: function () {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc();
  },
};
obj2.sing();

// arrow function's this is lexical decided
const obj3 = {
  name: "Jack",
  sing: function () {
    console.log("a", this);
    var anotherFunc = () => {
      console.log("b", this);
    };
    anotherFunc();
  },
};
obj3.sing();
