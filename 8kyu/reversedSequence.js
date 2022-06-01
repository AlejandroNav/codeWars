//Build a function that returns an array of integers from n to 1 where n>0.

//Example : n=5 --> [5,4,3,2,1]
const reverseSeq = n => {
    let res = [];
    let j = 0;
    for (let i = n; i > 0; i--) {
        j++;
        res[i - 1] = j
    }
    return res;
};
console.log(reverseSeq(3)); // my methos uses a global variable to go in one direction and the loop variable to go in the other direction

const reverseSeq1 = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};
console.log(reverseSeq1(6)); // the codewars metod uses push to add the item at the end of the array