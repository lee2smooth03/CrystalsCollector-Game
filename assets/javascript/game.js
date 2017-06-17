//this should be fun
"use-strict"
$(document).ready(function(){

var wins = 0;
var losses = 0;
var myScor = 0;
var magNum = 0;

//variables that capture values of the clicks
var blk = 0;
var ylw = 0;
var grn = 0;
var red = 0;

	//when user clicks the "New Game" button, set the values of wins, losses, and the magic number
	$("#NewGame").on("click", NG);

	function NG(){
		//reset the player's score back to 0
		var myScor = 0;

		//set a value for magNum: number between 19 and 120
		magNum = Math.floor((Math.random() * 120) + 19);

		//set the HTML page values to the wins, losses, score, etc
		$("#myGuess").html(myScor);
		$("#targetNum").html(magNum);
		$("#wins").html("<h1 class='guess'>Wins: " + wins + "</h1>");
		$("#loss").html("<h1 class='guess'>Losses: " + losses + "</h1>");

		//let's assign some values to the crystal clicks
		blk = Math.floor((Math.random() * 12) + 1);
		ylw = Math.floor((Math.random() * 12) + 1);
		grn = Math.floor((Math.random() * 12) + 1);
		red = Math.floor((Math.random() * 12) + 1);

	};

	//when the user clicks "Reset Me", all of the wins and losses should be reset to zero

	$("#ResetMe").on("click", function(){
		
		//set a value for magNum: number between 19 and 120
		magNum = Math.floor((Math.random() * 120) + 19);

		wins = 0;
		losses = 0;
		myScor = 0;

		//set the HTML page values to the wins, losses, score, etc
		$("#myGuess").html("---");
		$("#targetNum").html("---");
		$("#wins").html("<h1 class='guess'>Wins: ??</h1>");
		$("#loss").html("<h1 class='guess'>Losses: ??</h1>");

	});

	//need function that will add values of clicks to my score
		//every button gets a click function

		$("#black1").on("click", function(){

			//add the value to the total score
			myScor += blk;

			//display the updated score
			$("#myGuess").html(myScor);

			//compare my score to the target: fx
			check(myScor,magNum);
		});

		$("#gold1").on("click", function(){

			//add the value to the total score
			myScor += ylw;

			//display the updated score
			$("#myGuess").html(myScor);

			//compare my score to the target: fx
			check(myScor,magNum);
		});

		$("#green1").on("click", function(){

			//add the value to the total score
			myScor += grn;

			//display the updated score
			$("#myGuess").html(myScor);

			//compare my score to the target: fx
			check(myScor,magNum);
		});

		$("#red1").on("click", function(){

			//add the value to the total score
			myScor += red;

			//display the updated score
			$("#myGuess").html(myScor);

			//compare my score to the target: fx
			check(myScor,magNum);
		});
	//need function that will compare my score to the tartet
		//if my score < target: gamble
		//if my score = target: win (delay for 2 seconds and new game)
		//if my score > target: lose (delay for 2 seconds and new game)

	function check(val1, num1){

		if(val1 === num1){
			//add 1 to wins count
			wins++;

			//display it to the screen
			$("#wins").html("<h1 class='guess'>Wins: " + wins + "</h1>");
			NG();
		}

		else if (val1 > num1){

			//add 1 to losses count
			losses++;

			//display it to the screen
			$("#loss").html("<h1 class='guess'>Losses: " + losses + "</h1>");

			NG();

		}
	}


});
