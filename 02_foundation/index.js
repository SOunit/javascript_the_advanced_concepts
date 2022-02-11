// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(3, 5);
const obj2 = new Animal("5", "10");

// Animal{x: 3, y: 5}
console.log(obj1);
