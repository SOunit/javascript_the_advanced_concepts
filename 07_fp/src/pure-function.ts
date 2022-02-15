// no side effects
// input ---> output

// has side effect
const array = [1, 2, 3];
// function mutateArray(arr: number[]) {
//   arr.pop();
// }
// function mutateArray2(arr: number[]) {
//   arr.forEach((item) => {
//     arr.push(1);
//   });
// }

// no side effect
function removeLastItem(arr: number[]) {
  const newArray = ([] as number[]).concat(arr);
  newArray.pop();
  return newArray;
}

function multiplyBy2(arr: number[]) {
  return arr.map((item) => item * 2);
}

const array2 = removeLastItem(array);
console.log(array);
console.log(array2);

const array3 = multiplyBy2(array);
console.log(array);

function a(num1: number, num2: number) {
  console.log("hi");
  return num1 + num2;
}
console.log(a(3, 4));

function b(num: number) {
  return num * 2;
}

console.log(b(a(3, 4)));
