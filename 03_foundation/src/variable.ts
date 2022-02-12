// variable environment
const variableSample = () => {
  // scope chain
  var x = "x";

  function two() {
    console.log(x);
    var isValid;
  }

  function one() {
    var isValid = true;
    var y = "y";
    two();
  }

  var isValid = false;
  one();
};

export default variableSample;
