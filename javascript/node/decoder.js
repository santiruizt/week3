var words, message;
words = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"];
words2 = ["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"]

message = decoder(words2);
console.log(message);


function decoder(words) {
	var index = 0;
	var secretMessage = "";
	for (var i = 0; i < words.length; i++) {
		secretMessage += words[i].charAt(index);
		// index++;
		// if (index + 1 === 6) {
		// 	index = 0;
		index = (index + 1) % 5;
		// secretMessage += words[i].charAt(index+=1);
		// secretMessage += words[i].[index];
	
	}

	return secretMessage;
		
}

module.exports = decoder;