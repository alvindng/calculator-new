$(function() {

  $('form').submit(function(event) {

    event.preventDefault();

    var num1 = parseInt($('#number1').val());
    var num2 = parseInt($('#number2').val());

    var operation = $('input:radio[name=operation]:checked').val();


    if (operation === "add") {
      var result = (num1 + num2);
      $("#output").text(result);
    } else if (operation === "subtract") {
      var result = (num1 - num2);
      $("#output").text(result);
    } else if (operation === "multiply") {
      var result = (num1 * num2);
      $("#output").text(result);
    } else if (operation === "divide") {
      var result = (num1 / num2);
      $("#output").text(result);
    } 

  });

});
