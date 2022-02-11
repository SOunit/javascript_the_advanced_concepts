export const executionContextSample = () => {
  // execution context
  function printName() {
    return "Jack";
  }

  function findName() {
    // function a's execution context is findName function execution context
    // because lexical environment of function a is inside findName function
    function a() {}
    a();
    return printName();
  }

  function sayMyName() {
    return findName();
  }

  let result: any = sayMyName();
  console.log(result);

  // global execution context
  var a = "this is a in window object";
  console.log(window.a);

  // lexical context
  // this belongs to global execution context
  var b = 10;
};
