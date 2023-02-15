function squareSum(xnumbers){
    return xnumbers.map(x => x ** 2).reduce(function(a, b){
        return a + b;});
}

console.log(squareSum([2,6,7,6]));
//console.log(squareSum([2,6,7,6]).reduce(function(a, b){
//    return a + b;}));