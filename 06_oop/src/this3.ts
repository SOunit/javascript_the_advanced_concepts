// review this keyword

// 1. new binding
function Person(name: string, age: number) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Jack", 38);
console.log(person1);

// 2. implicit binding
const person = {
  name: "Bec",
  age: 38,
  hi() {
    console.log(`hi ${this.name}`);
  },
};
person.hi();

// 3. explicit binding
const person3 = {
  name: "Kevin",
  age: 38,
  hi: function () {
    console.log("hi " + this.setTimeout);
  }.bind(window),
};
person3.hi();

// 4. arrow function
// this is decided static lexical environment
const person4 = {
  name: "Kate",
  age: 38,
  hi: function () {
    var inner = () => {
      console.log(`hi ${this.name}`);
    };
    inner();
  },
};
person4.hi();
