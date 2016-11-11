var exampleArray = [2, -5, 10, 5, 4, -10, 0];

var results = process(exampleArray);

function process(data){
	var positions = [];
	data.forEach (function (a, i) {
		data.forEach (function (b, j) {
			// for (var i = 0; i < data.length; i++) {
			// 	for (var j = 0; j < data.length; j++) {
			// 	}
			// }
			if (a + b === 0) {positions.push (i +","+ j)}
		});
	});

	return positions;
}

console.log("Este es el array: ");
console.log(results);
