/*// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};*/


// ... is a rest operator which collects all additional arguments into an array.
const removeFromArray = function(input, ...args) {
  // Filter is used to create a new array (shallow copy) that includes only the elements that are not in args.
  return input.filter(element =>
    //The check ensures that only elements not found in args are included in the result.
    !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;