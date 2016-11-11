
var viking = require("./viking.js");

var vikings = [new viking("Harald", 500, 70), new viking("Gunnvor", 475, 60)]

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
	this.health = (Math.floor(Math.random() * 80) + 100);
	this.strength = (Math.floor(Math.random() * 10) + 15);

}

var saxon1 = new saxon();
var saxon2 = new saxon();
var saxons = [saxon1, saxon2];

var town = function(vikings, saxons, turns) {
	this.vikings = vikings;
	this.saxons = saxons;
	this.turns = Math.floor(Math.random() * (8 - 5 + 1) + 5);

	var totalVikings = this.vikings.length;
	var totalSaxons  = this.saxons.length;

	this.assault = function() {
		while (totalVikings > 0 && totalSaxons >0 && this.turns>=5 && this.turns<=8) {
			var rdmViking = this.vikings[Math.floor(Math.random()*totalVikings)];
			var rdmSaxon  = this.saxons[Math.floor(Math.random()*totalSaxons)];
			console.log(this.turns);
			rdmSaxon.health -= rdmViking.strength;
			rdmViking.health -= rdmSaxon.strength;
			console.log("Saxons's health: " + rdmSaxon.health);
			console.log(rdmViking.name + "'s health: " + rdmViking.health);

			if (rdmSaxon.health < 0 ) {
				saxons.splice(rdmSaxon);
				console.log("Saxon is dead!!");
			}else if (totalVikings == 0) {
				vikings.splice(rdmViking);
			}
		}

		if (totalVikings == 0) {
			console.log('Saxons won!!!!!!!!');
		}
		else if (totalSaxons == 0) {
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
		// 			console.log("Saxon is dead!!");

		// 		}

		// 	}else if (totalVikings == 0) {
		// 		console.log('Saxons won!!!!!!!!');
		// 	}else if (totalSaxons == 0) {
		// 		console.log('Vikings won as predicted!!!');
		// 	}

	}
}


var madrid = new town(vikings, saxons);
madrid.assault();