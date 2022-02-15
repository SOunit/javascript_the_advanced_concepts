// compose
// data -> fn -> data -> fn -> data
const compose = (f: Function, g: Function) => (data: number) => f(g(data));

const multiplyBy3 = (num: number) => num * 3;
const makePositive = (num: number) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);
let result: any = multiplyBy3AndAbsolute(-50);
console.log(result);

// Pipe
const pipe = (f: Function, g: Function) => (data: number) => g(f(data));

const multiplyBy3AndAbsolutePipe = pipe(multiplyBy3, makePositive);
result = multiplyBy3AndAbsolutePipe(-50);
console.log(result);

// compose vs. pipe
// fn1(fn2(fn3(50)))
// compose(fn1, fn2, fn3)(50)
// pipe(fn3, fn2, fn1)(50)
