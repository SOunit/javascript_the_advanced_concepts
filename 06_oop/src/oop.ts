class Character {
  name: string;
  weapon: string;
  constructor(name: string, weapon: string) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class.
// The output of the below code should be:

class Queen extends Character {
  type: string;
  constructor(name: string, weapon: string, type: string) {
    super(name, weapon);
    this.type = type;
  }
}

// create a new instance with the queen having (name, weapon, type).
// Type includes: 'hearts', 'clubs', 'spades', 'diamonds'
const victoria = new Queen("Victoria", "army", "hearts");
console.log(victoria);

// will console.log the attack() method in Character class
// AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
console.log(victoria.attack());
