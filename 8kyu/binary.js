function addBinary(a, b) {
    var sum = a + b,
        binary = '';

    while (sum > 0) {
        binary = (sum % 2) + binary;
        sum = Math.floor(sum / 2);
    }

    return binary;
}
console.log(addBinary(5, 10));

function addBinary1(a, b) {
    return (a + b).toString(2)
}
console.log(addBinary1(10, 5));