var Lluis = function (height, weight, hair, tonteria) {
	this.height = height;
	this.weight = weight;
	this.hair = hair;
	this.tonteria = tonteria;
}

Lluis.prototype.decirTonterias = function() {
	console.log(this.tonteria + "!!!!");
}


var lluis = new Lluis ("1,87", "80kg", "brown", "blablabla")
lluis.decirTonterias()
