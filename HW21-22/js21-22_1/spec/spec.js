var raisedToThePower = require('../js/script.js');

describe("inspection raisedToThePower", function() {
  it("возведение положительного числа в положительную степень", function() {
  	var result;
  	result = raisedToThePower(2,3);
    expect(result).toBe(8);
  });
  it("возведениe положительного числа в отрицательную степень", function() {
  	var result;
  	result = raisedToThePower(4,-5);
    expect(result).toBe(0.0009765625);
  });
  it("возведениe в степень 0", function() {
  	var result;
  	result = raisedToThePower(8,0);
    expect(result).toBe(1);
  });
  it("возведение отрицательного числа в положительную степень", function() {
    var result;
    result = raisedToThePower(-6,3);
    expect(result).toBe(-216);
  });
  it("возведение отрицательного числа в отрицательную степень", function() {
    var result;
    result = raisedToThePower(-2,-2);
    expect(result).toBe(0.25);
  });
});