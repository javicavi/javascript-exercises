const repeatString = function (text, num) {
  // Checks if num is negative. If so, it returns "ERROR".
  if (num < 0) return "ERROR";
  // Initialize an empty string to accumulate repeated text.
  let string = "";
  // Loop from num down to 1 (inclusive).
  for (let i = num; i > 0; i--) {
    // Concatenate text to the string in each iteration of the loop.
    string += text;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
