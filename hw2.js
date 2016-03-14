function pow() {
			var num = prompt('Введите число');
			var exp = prompt('Введите степень');
			var result = num;
			
			if (exp == 0) {
				console.log('1');
			} else if (num && exp && !isNaN(num) && !isNaN(exp)) {
				for (var i = 1; i < exp; i++) {
					result*=num;
				}
				console.log(result);
			} 
		}
		pow();