
function raisedToThePower(number,exponent){
	var result=number;
	if (exponent==0){
		result=1;
		return result;
	};
	if (exponent<0){
		exponent=exponent*-1;
		for (var i=1; i<exponent; i++){
			result *=number;
		};
		var negativeExponentResult=1/result;
		return negativeExponentResult;
	}else{
		for (var i=1; i<exponent; i++){
			result *=number;
		};
		return result;
	}

};
module.exports = raisedToThePower;