function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} ${father} ${son}`;
    };
  };
}

let result = a()()();
console.log(result);

const one = a();
console.log(one);
const two = one();
console.log(two);
const three = two();
console.log(three);

const boo = (string: string) => (name: string) => (name2: string) =>
  console.log(`${string} ${name} ${name2}`);

result = boo("hi")("jack")("bec");
console.log(result);

// exercise
function callMeMaybe() {
  const callMe = "Hi! I am now here!";
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
}

callMeMaybe();

// closure benefit
function heavyDuty(index: number) {
  const bigArray = new Array(7000).fill(":)");
  console.log("created!");

  return bigArray[index];
}

// memory efficiency
const createArray = () => {
  const bigArray = new Array(7000).fill(":)");
  return (index: number) => {
    return bigArray[index];
  };
};
const getIndexValue = createArray();
console.log(getIndexValue(0));

result = heavyDuty(688);
result = heavyDuty(688);
result = heavyDuty(688);
result = heavyDuty(688);
console.log(result);

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);

// closure benefit
function heavyDuty2() {
  const bigArray = new Array(7000).fill(":)");
  console.log("created again!");

  return function (index: number) {
    return bigArray[index];
  };
}

// // encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "boom!!";
  };
  setInterval(passTime, 1000);

  return {
    launch,
    totalPeaceTime,
  };
};

const ohNo = makeNuclearButton();
result = ohNo.totalPeaceTime();
console.log(result);

// exercise
let view: string;
function initialize() {
  let called = 0;
  return () => {
    if (called > 0) {
      return;
    } else {
      view = "beer";
      called++;
      console.log("view has been set!");
    }
  };
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);

// exercise
const array = [1, 2, 3, 4];
// this var belongs to global scope
// when setTimeout function run, i is 4

// if let i = 0; let create a block scope
// so data stays 0, 1, 2, 3
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`I am at index ${i}`);
  }, 3000);
}

// let solution
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log(`I am at index ${i}`);
  }, 3000);
}

// closure solution
for (var i = 0; i < array.length; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(`I am at index ${i}`);
    }, 3000);
  })(i);
}
