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

const peter = new Elf("peter", "stones");
console.log(peter);
peter.attack();

const sam = new Elf("sam", "fire");
console.log(sam);
sam.attack();
