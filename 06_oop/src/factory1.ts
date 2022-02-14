const elf = {
  name: "Jack",
  weapon: "bow",
  attack() {
    return `attack with ${this.weapon}`;
  },
};

let result = elf.name;
result = elf.attack();
console.log(result);

// Object.create()
// to share functions
const elfFunctionsStore = {
  attack() {
    return `attack with ${this.weapon}`;
  },
};

// factory function
function createElf(name: string, weapon: string) {
  return { name, weapon };
}

const peter = createElf("peter", "stones");
peter.attack = elfFunctionsStore.attack;
console.log(peter.attack());
const sam = createElf("sam", "fire");
console.log(sam.attack());
