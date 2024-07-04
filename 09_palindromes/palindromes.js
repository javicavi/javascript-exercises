const palindromes = function (string) {
  const cleanString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedString = cleanString.split("").reverse().join("");
  console.log(cleanString)
  console.log(reversedString)
  return cleanString == reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;