const reverseString = function (text) {
  // Split the string into an array of characters.
  return text.split("")
    // Reverse the array of characters.
    .reverse()
    // Join the reversed array back into a string.
    .join("");
};

// Do not edit below this line
module.exports = reverseString;
