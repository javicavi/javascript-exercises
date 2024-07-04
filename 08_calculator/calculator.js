const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arrayNum) {
  if(arrayNum == []) return 0;
  let result = 0;
	arrayNum.forEach(number => {
    result += number;
  });
  return result;
};

const multiply = function(arrayNum) {
  if(arrayNum == []) return 0;
  let result = 0;
	arrayNum.forEach((number, index) => {
    if(index == 0) result = number;
    else result *= number;
  });
  return result;
};

const power = function(num1, num2) {
  result = num1;
	for(let i = 1; i < num2; i++) {
    result *= num1;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
	for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
