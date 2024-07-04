const fibonacci = function(num) {
  let counter = 0;
  let numAnterior = 0;
  let numSiguiente = 1;
  let numTotal = 1;

  if(num == 0) return 0;
  if (num < 0) return "OOPS";
  
  while(counter < num) {
    if(counter == 0) {
      counter ++;
    } else {
      numTotal = numAnterior + numSiguiente;
      numAnterior = numSiguiente;
      numSiguiente = numTotal;
      counter ++;
    }
  }
  return numTotal;
};

console.log(fibonacci("8"))
// Do not edit below this line
module.exports = fibonacci;
