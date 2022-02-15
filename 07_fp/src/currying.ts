// currying
(function () {
  const multiply = (a: number, b: number) => a * b;
  const curriedMultiply = (a: number) => (b: number) => a * b;

  const curriedMultiplyBy5 = curriedMultiply(5);
  let result = curriedMultiplyBy5(3);
  console.log(result);
})();

// partial application
(function () {
  const multiply = (a: number, b: number, c: number) => a * b * c;
  const partialMultiplyBy5 = multiply.bind(null, 5);
  let result = partialMultiplyBy5(4, 10);
  console.log(result);
})();
