const convertToCelsius = function(fahrenheit) {
  const celsiusTemperature = ((fahrenheit - 32) * 5 / 9);
  return Math.round(celsiusTemperature * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheitTemperature = ((celsius * 9 / 5) + 32);
  return Math.round(fahrenheitTemperature * 10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};