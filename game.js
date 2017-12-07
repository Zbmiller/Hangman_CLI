
// Game will control out of display and hold guesses made by player

// 


var inquirer = require('inquirer')
var game = require('./chosenWord.js')
var word = require('./word.js')
var chosen 
var number 
var guessWord 
var chance 
var guessed = [];

function gameon(){
	// var guessed = [];
	var newround = new game();
	number = newround.number
	chosen = newround.chosen
	guessWord = new word(chosen)
	chance = guessWord.length()
	
	show()
}

function show(){
	//console.log (guessWord.letterArray().join(" "))
	//console.log(chosen)
	// var guessed = [];

	if(number < chance){
		var questions = question();
		inquirer.prompt(questions).then(function(answer){
	//check if user inputed this before, so that people can not input the same correct letter to win
			 
			function checkBefore(){
				for (var i = 0; i < guessed.length; i++) {
					if(guessed[i] === answer.guess){
						return true
					}
				}
			}

			if(checkBefore()){ 
				console.log('You have already guess that letter')
				number++;
				console.log(`You have ${chance - number} chances left`)
				show()
			}

			else{
				guessed.push(answer.guess)

				guessWord.checkLetter(answer.guess);
				number ++;
				
				if(guessWord.win != true){
					console.log(`You have ${chance - number} chances left`)
					show()
				}else{
					console.log(chosen)
					newgame()
				}
			}
		})
		

	}else{
	console.log("You lose")
	newgame();
}
}

function question() {
	var questions = [
		{	
			name:'guess',
			type:'input',
			message: guessWord.letterArray().join(" ")
		}
		]
		return questions
}

function newgame(){
	var questions = [
			{	
			name:'newGame',
			type:'confirm',
			message: `${chosen.split("").join(" ")} \n Do you want a new Game?`,
			default: false		
		}
	]

	inquirer.prompt(questions).then(function (answer){
		if(answer.newGame){
			// var guessed = [];
			console.log("New Game Commence")
			gameon();
			
		}
	})
}

gameon()

