// Constructor Function
function Elf(this: any, name: string, weapon: string) {
  this.name = name;
  this.weapon = weapon;
}

// "this" in function has dynamic pointer
// "this" in arrow function has lexical pointer
Elf.prototype.attack = function () {
  console.log(`attack with ${this.weapon}`);
};

// dynamic this and self
// Elf.prototype.build = function () {
//   const self = this;
//   function building() {
//     console.log(`${self.name} house`);
//   }
//   building();
// };

// lexical this in arrow function
// Elf.prototype.build = function () {
//   const building = () => {
//     console.log(`${this.name} house`);
//   };
//   building();
// };

// this binding
Elf.prototype.build = function () {
  function building() {
    console.log(`${this.name} house`);
  }
  building.call(this);
};

const peter = new Elf("peter", "stones");
console.log(peter);
peter.attack();
peter.build();

const sam = new Elf("sam", "fire");
console.log(sam);
sam.attack();
