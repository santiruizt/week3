var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	wheels = 4;

};

Car.prototype.makeNoise = function () {
	console.log(this.noise);
}

var car = new Car("bmw", "Brrr!")
car.makeNoise()