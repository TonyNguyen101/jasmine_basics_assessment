var grader = require('../grader.js')

describe("Gives letter grade given a %", function(){
	it('returns a letter', function(){
		expect(grader.letterGrader(90)).toEqual("A")
		expect(grader.letterGrader(90.5)).toEqual("A")
		expect(grader.letterGrader(89.9999)).toEqual("B")
		expect(grader.letterGrader(71)).toEqual("C")
		expect(grader.letterGrader(60)).toEqual("D")
		expect(grader.letterGrader(0)).toEqual("F")
		expect(grader.letterGrader()).toEqual("Sorry, try again")
		expect(grader.letterGrader(101)).toEqual("Sorry, try again")
	});
});

describe("average of an array", function () {
	it("average of an array", function(){
		expect(grader.averageScore([5,6])).toEqual(5.5)
		expect(grader.averageScore([0,10])).toEqual(5)
		expect(grader.averageScore([-10,10])).toEqual(0)
		expect(grader.averageScore([1,2,3,4,5,6,7,8,9])).toEqual(5)
	});
});

describe('median number of an array', function(){
	it('gives the middle number of an array or the mean of the 2 medians', function(){
		expect(grader.medianScore([1,2,3,4,5])).toEqual(3)
		expect(grader.medianScore([5])).toEqual(5)

		expect(grader.medianScore([2,3,4,5])).toEqual(3.5)
		expect(grader.medianScore([0,1])).toEqual(.5)
		expect(grader.medianScore([0])).toEqual(0)
	});
});

describe('mode number of array', function (){
	it('Returns the most common number', function(){
		expect(grader.modeScore[50,50,50,50]).toEqual(50)
	});
}); 


