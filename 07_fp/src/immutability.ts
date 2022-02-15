// immutability
const obj = { name: "Jack" };

function clone(obj: object) {
  // this is pure
  return { ...obj };
}

function updateName(obj: object) {
  const obj2 = clone(obj);
  obj2.name = "Bec";
  return obj2;
}

updateName(obj);
console.log(obj);
