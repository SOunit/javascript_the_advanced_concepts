// HOF
const hof = (fn: Function) => fn(5);
console.log(
  hof(function a(x: number) {
    return x;
  })
);

// closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const increment = closure();
console.log(increment());
console.log(increment());
console.log(increment());
