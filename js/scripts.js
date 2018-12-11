

$(document).ready(function(){
  $("form #btn").click(function(){
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();

    alert(answer1);

  });
});

// document.getElementById("form").onsubmit=function() {
//
//    var 1 = parseInt(document.querySelector('input:radio[name = "q1"]:checked').val);
// 	 var 2 = parseInt(document.querySelector('input:radio[name = "q2"]:checked').val);
// 	 var 3 = parseInt(document.querySelector('input:radio[name = "q3"]:checked').val);
// 	 var 4 = parseInt(document.querySelector('input:radio[name = "q4"]:checked').val);
//
//
// 	 result = q1 + q2 + q3 + q4;
//
// 	document.getElementById("score").innerHTML = result;
//
//   return false;
//
//
// if (result == 0) {result2 = "I don't think you studied."};
// if (result == 25) {result2 = "You need to spend more time. Try again."};
// if (result == 50) {result2 = "I think you could do better. Try again."};
// if (result == 75) {result2 = "So close. Try again."};
// if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
// document.getElementById("score2").innerHTML = result2;
// }
