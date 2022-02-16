(() => {
  // OOP
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
})();
(() => {
  // FP
  function getAttack(character: object) {
    return Object.assign({}, character, { attackFn: () => {} });
  }
  function Elf(name: string, weapon: string, type: string): object {
    let elf = {
      name,
      weapon,
      type,
    };

    return getAttack(elf);
  }

  //   Elf = attack() + sleep();
  //   Ogre = attack() + makeFort() + sleep();
})();
