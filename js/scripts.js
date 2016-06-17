// //back end logic
var pingPong = function (number) {
  var results =[];

  for (var i=1;i<=number;i++){
    if (i%3 !== 0 && i%5 !== 0){
      results.push(i);
    }else {
      if(i%3 === 0){
        results.push("ping");
      }
      if(i%5 === 0){
        results.push("pong");
      }
      if(i%15 ===0){
        results.push("pingpong");
      }
    }
  }
  // console.log(results);
  return results;
}

// Front end logic
$(function () {
  $("form#input").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());

    $("ul#result").empty();
    if (isNaN(number) || number <= 0) {
      alert("Please enter a positive number!");
    }else {
      var results = pingPong(number);

      results.forEach(function (result) {
         $("ul#result").append($("<li>").text(result));
      });
    }
  });
});
