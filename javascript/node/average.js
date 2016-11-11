var numbers = '70:80:90:100';

var res = numbers.split(":")

function averageColon(data){
	var numsArray = numbers.split(':');
	var sum = numsArray.reduce(function(a, b){ return parseInt(a) +parseInt(b);});
	var avg = sum / numsArray.length;
	return(avg)
}

console.log(averageColon(numbers))

// function averageColon(numbers){
// 	if(!numbers) return 0;
// 	var numsArray = numbers.split(/[&]/);
// 	var sum = numsArray.reduce(function(a, b){return parseInt(a) +parseInt(b);});
// 	var avg = sum / numsArray.length;
// 	return(avg)
// }

// console.log(averageColon(numbers))

