const iifeSample = () => {
  // IIFE(Immediate Invoked Function Expression)
  (function () {
    // all declare is function scoped!
    // no global pollution
    console.log("IIFE!!");
  })();

  var script1 = (function () {
    function a() {
      return 5;
    }
    return {
      a: a,
    };
  })();

  function a() {
    return "hahaha";
  }

  let result: any;
  result = a();
  console.log(result);

  result = script1.a();
  console.log(result);
};

export default iifeSample;
