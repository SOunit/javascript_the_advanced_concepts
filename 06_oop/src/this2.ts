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

  build() {
    // // 1. bind this
    // function building() {
    //   console.log(`${this.name} house`);
    // }
    // building.call(this);
    // 2. hold this
    // const self = this;
    // function building() {
    //   console.log(`${self.name} house`);
    // }
    // building();
    // 3. arrow function and lexical this
    const building = () => {
      console.log(`${this.name} house`);
    };
    building();
  }
}

const peter = new Elf("peter", "stones");
console.log(peter);
peter.attack();
peter.build();

const sam = new Elf("sam", "fire");
console.log(sam);
sam.attack();
