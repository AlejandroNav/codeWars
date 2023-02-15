// Sum Numbers
function sum (numbers) {
    "use strict";
    if (Array.isArray(numbers)) {
        let result = 0
        result = numbers.reduce((acc, current) => {
          return acc + current;
        }, 0);
        return result;
      }
      else{
        return 0
      }
};
console.log(sum([3,4]));