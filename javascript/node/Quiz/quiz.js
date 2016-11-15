var read = require('read');

function Question(text, answer, id) {
	this.text 	= text
	this.answer = answer
	this.id 	= id
};

Question.prototype.ask = function() {
	console.log("Question " + this.id + ": " + this.text + " ?\n>");
};


function Quiz(player, question_array) {
	this.player 		= player
	this.question_array = question_array
	this.score 			= 0
	this.question_index = 0

	this.read_score = function() {
		console.log("Your score is: " + this.score + " \n")
	};

	this.reset_score = function() {
		this.score = 0
	};

	this.start = function() {
		this.reset_score();
		console.log(" \n" + " \n" + " \n" + "Hey " + this.player + "!" + " Welcome to the USA quiz!" + " \n")
		console.log(" \n" + " \n" + "--------------------------------------------------------" + " \n" + " \n")
	};

	this.checkAnswer = function(err, answer) {
    	if (answer.toLowerCase() === question_array[this.question_index].answer.toLowerCase()) {
			console.log(" \n" + "Correct!"+ " \n")
			this.question_index++
			this.score++
			this.post_questions();

		} else {
			console.log(" \n" + "Incorrect! Try again..."+ " \n")
			
			if (this.score > 0) {
				this.score--;
			}
			this.post_questions();
		}

		
	};

	this.post_questions = function() {
		this.read_score();
		options = {
    		prompt: question_array[this.question_index].ask()
		};
	
		read(options, this.checkAnswer.bind(this));	
	};
};

Quiz.prototype.play = function() {
	
	this.start();

	this.post_questions();

};




var q1 = new Question("Which United States President is orange and hates women", "Donald Trump", 1);
var q2 = new Question("Which incompetent polotician finished runner up against the worst candidate there ever was and will be", "Hillary Clinton", 2);
var question_arr = [q1, q2]
var quiz = new Quiz("Santi", question_arr);

quiz.play();

