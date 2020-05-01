$(document).ready(function() {
  $("#triangle-form").submit(function(event) {

    event.preventDefault();
    let inputA = parseInt($("#sideA").val());
    let inputB = parseInt($("#sideB").val());
    let inputC = parseInt($("#sideC").val());

    if(inputA+inputB <= inputC || inputB+inputC <=inputA || inputC+inputA <= inputB) {
      $(".triangle-answer").hide();
      $(".not-triangle").show();

    } else if(inputA === inputB && inputB === inputC && inputC === inputA) {
      $(".not-triangle").hide();
      $(".triangle-answer").show();
      $(".result").text("an equilateral triangle because all sides are equal")
      
    } else if(inputA !== inputB && inputB !== inputC && inputC !== inputA) {
      $(".not-triangle").hide();
      $(".triangle-answer").show();
      $(".result").text("a scalene triangle because none of the sides are equal");

    } else if(inputA === inputB || inputB === inputC || inputC === inputA){
      $(".not-triangle").hide();
      $(".triangle-answer").show();
      $(".result").text("an isosceles triangle because exactly two of its sides are equal");

    } else {
      $(".not-triangle").hide();
      $(".triangle-answer").hide();
      alert("Hmmm. Something's gone wrong, please try that again. Are you sure you entered numbers?")
    }

  });
});

// equilateral triangle because all sides are equal
// isosceles triangle because two sides are equal
// scalene triangle because none of the sides are equal

// not-triangle
// triangle-answer
// result-scalene
// result-isoceles
// result-equilateral

// currently only accepts whole numbers, does not account for whether data is inches, centimeters, etc. will need to update and improve in future.