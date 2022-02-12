// executionContextSample();
// hoistingSample();
// funcSamples();
// variableSample();
// scopeChain();
// globalVariable();
// iifeSample();
// thisSample(window);

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};

a();
// EC:c
// a, window
// b, window
// c, c
