// ES6 Class
class Character {
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

class Elf extends Character {
  type: string;
  constructor(name: string, weapon: string, type: string) {
    super(name, weapon);
    console.log(this);
    this.type = type;
  }
}

class Ogre extends Character {
  color: string;
  constructor(name: string, weapon: string, color: string) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    console.log(`strongest fort in the world made`);
  }
}

const dolby = new Elf("Dolby", "cloth", "easy");
dolby.attack();

// const ogre = { ...dolby };
// console.log(dolby === ogre);
// ogre.attack();

const shrek = new Ogre("shrek", "club", "green");
shrek.attack();
shrek.makeFort();
// check1
console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Character.prototype.isPrototypeOf(Ogre.prototype));
// check2
console.log(dolby instanceof Elf);
console.log(dolby instanceof Ogre);
console.log(dolby instanceof Character);
