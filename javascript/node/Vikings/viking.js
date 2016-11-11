var Viking = function (name, health, strength) {
	this.name = name;
	this.health = health;
	this.strength = strength;
}

Viking.prototype.attack = function() {
	var damage = (Math.floor(Math.random() * (this.strength-20)) + 20);
	return damage;

}

module.exports = Viking;

