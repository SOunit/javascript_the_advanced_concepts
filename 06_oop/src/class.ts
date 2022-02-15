// ES6 Class
class Elf {
  name: string;
  weapon: string;

  constructor(name: string, weapon: string) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    console.log(`attack with ${this.weapon}`);
  }
}

const peter = new Elf("peter", "stones");
console.log(peter instanceof Elf);
console.log(peter);
peter.attack();

const sam = new Elf("sam", "fire");
console.log(sam);
sam.attack();
