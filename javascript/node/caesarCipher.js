
function caesarCipher (message) {
	shifted = "";
	for (var i = 0; i < message.length; i++) {
		if ((message[i] >= "A" && message[i] <= "Z") || (message[i] >= "a" && message[i] <= "z")) {
			nums = message[i].charCodeAt(0) - 3;
			shifted += String.fromCharCode(nums);
		
		}else {
			shifted += message[i];

		}

	}
	return shifted;
}

var encrypted = caesarCipher("Et tu, brute?");

console.log(encrypted);


//=> "Bq qr, _orqb?"


