$(document).ready(function(){

	var userInput;
	var previousGuess = [];
	var listGuess;
	var count = 0;
	var randomNumber;
	/*--- Display information modal box ---*/

	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('#formtext').submit(function(e){
  		e.preventDefault();
  		userInput = $('#userGuess').val();
  	
  		previousGuess.push(userInput);
  		capturePreviousGuess();
  		console.log("previous Guess is: " + previousGuess[previousGuess.length - 1]);
  		console.log("user input is: " + userInput);
  		newGame();
  	});

  	$('.new').click(function() {
  		resetInput();
  	});

  	generateRandom();
  
	function newGame(){
		if (userInput < 1 || userInput > 100) {
			alert("Input not valid! Please enter a number between 1 and 100.");
			return false;
		}
		else {
			listNum();
			diffNum();
			countUp();
			$('#userGuess').val('');
		}
	}

	function generateRandom(){
		randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log("random number is: " + randomNumber);
	}

	function diffNum(){
		var diff = Math.abs(randomNumber - userInput);
		console.log("diff = " + diff);
		if (userInput == randomNumber){
			$('#feedback').text("You Win!");
		}
		else if (diff <= 5){
			$('#feedback').text("Hot!");
		}
		else if (diff <= 15){
			$('#feedback').text("Warm!");
		}
		else if (diff <= 25){
			$('#feedback').text("Cold!");
		}
		else {
			$('#feedback').text("Way Off!");
		}
	}

	//captures users entered number and keeps track of each number used
	function capturePreviousGuess(){
		//if ($.inArray(userInput, previousGuess) == -1 ) 
		if (previousGuess.indexOf(previousGuess) != -1){
			console.log(previousGuess);
			$('#feedback').text("Make your guess!");
		}
		else {
			$('#feedback').text("Already used that number!");
			}
	}

	//list the users input in the guessList element
	function listNum(){
		$('#guessList').append('<li>' + userInput + '</li>');
	}

	//increase the count by 1 each time the user submits an input
	function countUp(){
		count++;
		$('#count').text(count);
	}

	function resetInput(){
		$('#userGuess').val('');
		count = 0;
		$('#count').empty();
		previousGuess = [];
		$('#feedback').text('Make your guess!');
		$('#guessList').empty();
	}
});



