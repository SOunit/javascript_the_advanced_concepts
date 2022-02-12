export const funcSamples = () => {
  // Function Expression
  var canada = () => {
    console.log("cold");
  };

  // Function Declaration
  function india() {
    console.log(arguments);

    console.log("warm");
  }

  // Function Invocation/Call/Execution
  // canada();
  india();

  function marry(person1: string, person2: string) {
    console.log(arguments);
    return `${person1} is married to ${person2}`;
  }

  let result: any;
  result = marry("Jack", "Bec");
  console.log(result);

  function marry2(...args: string[]) {
    console.log(args);
    return `${args[0]} is married to ${args[1]}`;
  }
  result = marry2("Jack", "Bec");
  console.log(result);
};
