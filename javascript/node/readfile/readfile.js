var fs = require('fs');

function print (error, content) {
	if (error) {
		console.log(error)
	} else {
		var result = averageColon(content);
		fs.writeFile('results.txt', result, "utf8", function(){
			console.log('Text saved in file');
		});
	}
}

function averageColon(data) {
		numsArray = data.split(':');
		var sum = numsArray.reduce(function(a, b){ return parseInt(a) +parseInt(b);});
	    var average = sum / numsArray.length;
	    return average
	}

fs.readFile('file.txt', 'utf8', print);



