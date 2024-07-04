const sumAll = function(num1, num2) {
  let highest = 0;
  let lowest = 0;
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (num1 > num2) {
    highest = num1;
    lowest = num2;
  } else {
    highest = num2;
    lowest = num1;
  }
  let total = 0;
  for(let counter = lowest; counter <= highest; counter ++) {
    total += counter;
  }
  return total;
};
// Do not edit below this line
module.exports = sumAll;
