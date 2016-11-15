
var viking = require("./viking.js");

var vikings = [new viking("Harald", 300, 80), new viking("Gunnvor", 250, 85)]

//var manolete = new viking("Harald", 500, 70);
//var santi = new viking("Gunnvor", 475, 60);


// var pit = function (viking1, viking2) {

// 	this.viking1 = viking1;
// 	this.viking2 = viking2;
	

// 	this.fight = function() {
// 	var turns = 1
// 		while (viking1.health > viking2.strength &&  viking2.health > viking1.strength && turns <= 8) {
// 			viking1.health -= viking2.attack();
// 			viking2.health -= viking1.attack();
// 			console.log(viking1.name + "'s health is " + viking1.health);
// 			console.log(viking2.name + "'s' health is " + viking2.health);
// 		}
// 	}	
// }

// var osgor = new pit(manolete, santi);
//osgor.fight();

var saxon = function() {
	this.health = (Math.floor(Math.random() * (100 - 80) + 80));
	this.strength = (Math.floor(Math.random() * (15 - 10) + 10));

}

var saxon1 = new saxon();
var saxon2 = new saxon();
var saxon3 = new saxon();
var saxon4 = new saxon();
var saxon5 = new saxon();
var saxon6 = new saxon();
var saxon7 = new saxon();
var saxon8 = new saxon();
var saxon9 = new saxon();
var my_saxons = [saxon1, saxon2, saxon3, saxon4, saxon5, saxon6, saxon7, saxon8, saxon9];

var town = function(vikings, saxons) {
	this.vikings = vikings;
	this.saxons = my_saxons;
	this.turns = Math.floor(Math.random() * (8-5) + 5);


	this.assault = function() {
		i = 1
		while (this.vikings.length > 0 && this.saxons.length > 0 && i<= this.turns) {
			var rdmViking = this.vikings[Math.floor(Math.random()*(this.vikings.length -1))];
			var rdmSaxon  = this.saxons[Math.floor(Math.random()*(this.saxons.length -1))];
			console.log(this.turns);
			console.log(rdmSaxon);
			rdmSaxon.health -= rdmViking.strength;
			rdmViking.health -= rdmSaxon.strength;
			console.log("Saxons's health: " + rdmSaxon.health);
			console.log(rdmViking.name + "'s health: " + rdmViking.health);

			if (rdmSaxon.health < 0 ) {
				console.log(this.saxons);
				this.saxons.splice(rdmSaxon, 1);
				console.log(this.saxons);
				console.log(this.saxons.length);
				console.log('hola');

			}else if (rdmViking.health < 0) {
				this.vikings.splice(rdmViking);
			}
			i++
		}

		if (this.vikings.length == 0) {
			console.log('Saxons won!!!!!!!!');
		}
		else if (this.saxons.length == 0) {
			console.log('Vikings won as predicted!!!');
		}

		// for (var i = 0; i < this.turns; i++) {
		// 	var rdmViking = this.vikings[Math.floor(Math.random()*totalVikings)];
		// 	var rdmSaxon  = this.saxons[Math.floor(Math.random()*totalSaxons)];
		// 	console.log(this.turns);

		// 	if (totalVikings > 0 && totalSaxons >0) {
		// 		//console.log(rdmViking.name + " has a health of " + rdmViking.health);
		// 		//console.log("Saxons's has a health of " + rdmSaxon.health);
		// 		//console.log('-----------------------');
		// 		rdmSaxon.health -= rdmViking.strength;
		// 		rdmViking.health -= rdmSaxon.strength;
				
		// 		console.log(rdmViking.name + " punches with " + rdmViking.strength);
		// 		console.log("Saxons's health: " + rdmSaxon.health);
		// 		console.log("Saxon" + " punches with " + rdmSaxon.strength);
		// 		console.log(rdmViking.name + "'s health: " + rdmViking.health);
		// 		if (rdmSaxon.health < 0 ) {
		// 			saxons.splice(rdmSaxon);
		// 			console.log("Saxon is dead!!");
		// 		}else if (rdmViking.health < 0) {
		// 			vikings.splice(rdmViking);
		// 			console.log(rdmViking + " is dead!!");
		// 		}

		// 	}else if (totalVikings == 0) {
		// 		console.log('Saxons won!!!!!!!!');
		// 	}else if (totalSaxons == 0) {
		// 		console.log('Vikings won as predicted!!!');
		// 	}
		// }

	}
}


var madrid = new town(vikings, my_saxons);
madrid.assault();