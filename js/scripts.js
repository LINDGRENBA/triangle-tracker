$(document).ready(function() {
  $("#triangle-form").submit(function(event) {

    event.preventDefault();
    let inputA = parseInt($("#sideA").val());
    let inputB = parseInt($("#sideA").val());
    let inputC = parseInt($("#sideA").val());

    if(inputA === inputB && inputB === inputC && inputC === inputA) {
      $(".not-triangle").hide();
      $(".triangle-answer").show();
      $(".result").text("equilateral triangle because all sides are equal")
    } else if(inputA === inputB && inputA !== inputC || inputB === inputC && inputB !== inputA || inputC === inputA && inputB !== inputC) {
      $(".not-triangle").hide();
      $(".triangle-answer").show();
      $(".result").text("isosceles triangle because two sides are equal");
    } else {
      alert("well that didn't work.");
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