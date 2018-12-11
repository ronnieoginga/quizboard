document.getElementById("form").onsubmit=function() {

   1 = parseInt(document.$('input:radio[name = "1"]:checked').val);
	 2 = parseInt(document.$('input:radio[name = "2"]:checked').val);
	 3 = parseInt(document.$('input:radio[name = "3"]:checked').val);
	 4 = parseInt(document.$('input:rradio[name = "4"]:checked').val);


	 result = 1 + 2 + 3 + 4;

	document.getElementById("score").innerHTML = result;

  return false;

}
if (result == 0) {result2 = "I don't think you studied."};
if (result == 25) {result2 = "You need to spend more time. Try again."};
if (result == 50) {result2 = "I think you could do better. Try again."};
if (result == 75) {result2 = "So close. Try again."};
if (result == 100) {result2 = "Excellent! You're a JavaScript pro!"};
document.getElementById("score2").innerHTML = result2;
