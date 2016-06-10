//back end logic
var pingPong = function (number) {
  var result ="";
  for (var i=1;i<=number;i++){
    console.log(i);
    if (i%3 !== 0 && i%5 !== 0){
      result = result + "<li>" + i + "</li>";
    }else {
      result = result + "<li>"
      if(i%3 === 0){
        result = result + "ping";
      }
      if(i%5 === 0){
        result = result + "pong"
      }
      result = result + "</li>"
    }
  }
  console.log(result);
  return result;
}

// Front end logic
$(function () {
  $("form#input").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    console.log(number);

    $("ul#result").append(pingPong(number));

  });
});
