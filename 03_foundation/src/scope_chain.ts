const scopeChain = () => {
  // scope chain
  const a = "a";
  function func1() {
    console.log(a);
    const b = "b";
    return function func2() {
      console.log(b);
      const c = "c";
      return function func3() {
        console.log(c);
      };
    };
  }

  func1()()();

  // weird scope chain sample 1
  //   function weird() {
  //     height = 50;
  //     return height;
  //   }

  //   weird();

  // weird scope chain sample 2
  var heyHey = function doodle() {
    console.log("hey hey");
    // doodle();
  };

  heyHey();

  // function scope sample
  if (5 > 4) {
    var secret = "12345";
  }
  console.log(secret);

  // // block scope sample
  // if (5 > 4) {
  //   let secret2 = "12345";
  // }
  // console.log(secret2);
};

export default scopeChain;
