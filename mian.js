const studentName = "JOHN CENA";
const studentAge = 15;
const studentGrade = 9;
const isPresent = true;

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Student Grade:", studentGrade);
console.log("Is Present:", isPresent);

// ---------------------------------------------------------------------------------------
const num1 = 10;
const num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

let updatedNum1 = num1 + 5;
let updatedNum2 = num2 - 2; 
console.log("Updated num1:", updatedNum1);
console.log("Updated num2:", updatedNum2);

console.log("Is num1 equal to num2?", updatedNum1 === updatedNum2);
console.log("Is num1 greater than num2?", updatedNum1 > updatedNum2);
console.log("Is num1 not equal to num2?", updatedNum1 !== updatedNum2);

const isPositive = (updatedNum1 > 0) && (updatedNum2 > 0);
const isEven = (updatedNum1 % 2 === 0) || (updatedNum2 % 2 === 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);