module.exports = {
	letterGrader: function(numGrade){
		if (90 <= numGrade && numGrade <= 100){
			return ("A");
		}
		if (80 <= numGrade && numGrade < 90){
			return ("B");
		}		
		if (70 <= numGrade && numGrade <= 80){
			return ("C");
		}		
		if (60 <= numGrade && numGrade <= 70){
			return ("D");
		}		
		if (0 <= numGrade && numGrade <= 60){
			return ("F");
		} 
		else {
			return "Sorry, try again";
		}
	},
	averageScore: function (array){
		var number = 0;
		for (var i = 0; i < array.length; i++) {
			number += array[i];
		}	
	return number/array.length;
	},
	medianScore: function (array){
		// odd array length
		if (array.length % 2 !== 0) {
			var numIndex = Math.floor(array.length / 2);
			return array[numIndex];
		}
		// even array length
		if (array.length % 2 === 0) {
			var numIndex = Math.floor(array.length / 2);
			return (array[numIndex - 1] + array[numIndex]) / 2; 
		}
		else {
			return "Sorry, try again";
		}
	},
	modeScore: function (array){

	}
}


function charFreq (string) {
	for (var i = 0; i < string.length-1; i++) {
		var newObject = {};
		var char = string[i];
		if (newObject[char]) {
 			// if the charactor exists in the object then add 1 to it
			newObject[char] = newObject[char] + 1; 
		}
		else {
			// if the doesn't exist in the object then set the value to 1
			newObject[char] = 1;
		}
	} 
return newObject;	
}







