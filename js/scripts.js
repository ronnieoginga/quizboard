document.getElementById("form").onsubmit=function() {

   1 = parseInt(document.$('input[name = "1"]:checked').val);
	 2 = parseInt(document.$('input[name = "2"]:checked').val);
	 3 = parseInt(document.$('input[name = "3"]:checked').val);
	 4 = parseInt(document.$('input[name = "4"]:checked').val);


	 result = 1 + 2 + 3 + 4;

	document.getElementById("score").innerHTML = result;

  return false;

};
