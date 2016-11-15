var fs = require('fs');

function print(error, content) {
	if (error) {
		console.log(error)
	} else {
		var result = repeated_nums(content);
		fs.writeFile('results.txt', result, "utf8", function(){
			console.log('Text saved in file');
		});
	}
}

function repeated_nums(data) {
		numsArray = []
		repeated_nums = []
		//numsSplit = data.split(',');

		
	}




fs.readFile('file2.txt', 'utf8', print);