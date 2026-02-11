console.log("-------------------Arithmetic Op------------------");
console.log("Addition = ", 5 + 3);
console.log("Subtraction = ", 5 - 3);
console.log("Multiplication = ", 5 * 3);
console.log("Division = ", 5 / 3);
console.log("Modulus = ", 5 % 3);
console.log("exponent = ", 5 ** 3);


console.log("-------------------Comparison Op------------------");

console.log("Equal = ", 5 == '5');  // true
console.log("Not Equal = ", 5 != 3);  // true
console.log("Greater than = ", 5 > 3); // true
console.log("Less than = ", 5 < 3); // false
console.log("Greater than or equal = ", 5 >= 5); // true
console.log("Less than or equal = ", 5 <= 5); // true
console.log("Strict equal = ", 5 === '5'); // false
console.log("Strict not equal = ", 5 !== '5'); // true

console.log("-------------------Logical Op------------------");
console.log("--------Logical AND----");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("--------Logical OR----");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log("--------Logical NOT----");
console.log(!true);
console.log(!false);


console.log("--------Ternary----");
console.log(1 > 3 ? "value is greater" : "value is smaller");