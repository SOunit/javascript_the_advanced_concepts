export const hoistingSample = () => {
  // hoisting
  console.log("1---------");
  // console.log(teddy);
  // console.log(teddy2);
  // console.log(sing());

  // sing2();

  var sing2 = () => {
    console.log("sing2");
  };

  var teddy = "bear";
  let teddy2 = "bear";
  // prevent function hoisting
  (function sing() {
    console.log("ohh la la la");
  });

  var one = 1;
  var one = 2;

  // hoisting test1
  // hoisting_a();
  // function hoisting_a() {
  //   console.log("hi");
  // }
  // function hoisting_a() {
  //   console.log("bye");
  // }

  // function hoisting_a() {
  //   a();

  //   function a() {
  //     console.log("a");
  //   }
  // }
  // hoisting_a();

  // hoisting test code2
  var favoriteFood = "grape";

  var foodThoughts = function () {
    console.log("original, " + favoriteFood);

    var favoriteFood = "sushi";

    console.log("new, " + favoriteFood);
  };

  foodThoughts();

  // hoisting test 3
  // function bigBrother() {
  //   function littleBrother() {
  //     return "it is me!";
  //   }
  //   return littleBrother();
  //   function littleBrother() {
  //     return "no me!";
  //   }
  // }

  // Before running this code, what do you think the output is?
  // bigBrother();
};
