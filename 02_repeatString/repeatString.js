const repeatString = function(input, count) {
	if (count < 0) return "ERROR" ;
	let string = "";
	for (let i = 0; i < count; i++){
		string += input;
	}
	return string;
};

// Do not edit below this line
module.exports = repeatString;
