//Fork the Repository: Make sure you're signed into github.com, then visit our repo and 
//click on the "Fork" button in the top right. 
//After your fork has been created, you'll want to clone it to your local computer.
//Familiarize Yourself with The Layout and CSS: 
//You'll need to use jQuery in the project to listen for when users submit guesses. 
//You should spend a few minutes looking over the HTML and 
//CSS files and using Developer tools to inspect page element.


//Break the App Logic Down Into Steps and Write Functions: 
//You'll need a newGame() function that does everything necessary to start a new game. 
//This function will itself need to call other functions to take care of specific tasks — 
//for instance, setting the randomly generated secret number. 
//You should break the application logic down into discrete steps, 
//then work on one step at a time.

$(document).ready(function(){

	var userInput;
	var previousGuess = [];
	var listGuess;
	var count;
	var randomNumber;
	var diff;
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
  	
  		capturePreviousGuess();
  		previousGuess.push(userInput);
  		console.log("previous Guess is: " + previousGuess[previousGuess.length - 1]);
  		console.log("user input is: " + userInput);
  		newGame();
  		generateRandom();
  	});

  	// $('.new').click(newGame);
  	$('.new').click(function() {
  		resetInput();
  	});
  
	function newGame(){

		if (userInput < 1 || userInput > 100) {
			alert("Input not valid! Please enter a number between 1 and 100.");
			return false;
		}
		else {
			listNum();
			//capturePreviousGuess();
			//count();
		}
	}

	function generateRandom(){
		randomNumber = Math.floor(Math.random() * 100) + 1;
		//randomNumber = Math.floor(Math.random() *100) + 1;
		console.log("random number is: " + randomNumber);
		//compare();
		diffNum();
	}


	/*function compare(){
		diff = Math.abs(userInput - randomNumber);
		console.log("diff = " + diff);
		diffNum();
	}*/

	function diffNum(){
		console.log("user input in diffNum = " + userInput);
		console.log("random number " + randomNumber);
		if (userInput == randomNumber){
			$('#feedback h2').text("You Win!");
		}
		else if (userInput - randomNumber <= 5){
			$('#feedback h2').text("Hot!");
		}
		else if (userInput - randomNumber > 5 && userInput - randomNumber < 20){
			$('#feedback h2').text("Warm!");
		}
		else if (userInput - randomNumber > 21 && userInput - randomNumber < 30){
			$('#feedback h2').text("Cold!");
		}
		else {
			$('#feedback h2').text("Way Off!");
		}
	}

	//captures users entered number and keeps track of each number used
	function capturePreviousGuess(){
		console.log($.inArray(userInput, previousGuess));
		if ($.inArray(userInput, previousGuess) != -1 ) {
			$('#feedback').text("Already used that number!");
		}
		else {
			$('feedback').text("Make your guess!");{
			}
			listNum();
		}
	}

	//list the users input in the guessList element
	function listNum(){
		$('#guessList').append('<li>' + userInput + '</li>');
	}

	//increase the count by 1 each time the user submits an input
	/*function count(){
		//if (userInput != ''){

		count++;
	}*/


	function resetInput(){
		$('#userGuess').val('');
		count = 0;
		previousGuess = [];
		$('feedback h2').text('Make your guess!');
	}
});

