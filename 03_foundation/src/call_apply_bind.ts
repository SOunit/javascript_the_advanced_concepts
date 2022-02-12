const wizard = {
  name: "jack",
  health: 100,
  heal(num1: number = 100, num2: number = 0) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Bec",
  health: 30,
};

console.log(wizard);
console.log(archer);

wizard.heal();
console.log(wizard);
console.log(archer);

wizard.heal.call(archer, 10, 10);
console.log(wizard);
console.log(archer);

wizard.heal.apply(archer, [10, 10]);
console.log(wizard);
console.log(archer);

const healArcher = wizard.heal.bind(archer, 80, 80);
healArcher();
console.log(wizard);
console.log(archer);

const array = [1, 2, 3];
function getMaxNumber(arr: number[]) {
  return Math.max.apply(null, arr);
}

let result: any;
result = getMaxNumber(array); // should return 3
console.log(result);

// function currying
function multiply(a: number, b: number) {
  return a * b;
}

let multiplyByTwo = multiply.bind(null, 2);
result = multiplyByTwo(8);
console.log(result);

// exercise
var b = {
  name: "Jack",
  say() {
    console.log(this);
  },
};
var c = {
  name: "Jack",
  say() {
    return function () {
      console.log(this);
    };
  },
};

var d = {
  name: "Jack",
  say() {
    return () => {
      console.log(this);
    };
  },
};

b.say();
c.say()();
d.say()();

// exercise
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simo
