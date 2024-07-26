// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log("Part 1: MATH Problems");
//console.log(isValid);
console.log(`the four numbers are vaild according to the provided criteria: ${isValid}.`);
// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

const isdivBy5 = (n1 % 5 === 0) &&(n2 % 5 === 0)&&(n3 % 5 === 0)&&(n4 % 5 === 0);
//console.log(isdivBy5);
console.log(`Is all numbers are divisible by 5: ${isdivBy5}`);

const isGreatthanLast =(n1>n4);
//console.log(isGreatthanLast); 
console.log(`is the first number larger than last number: ${isGreatthanLast}`);

console.log("Subtract the first number from the second number then" + 
    "Multiply the result by the third number" +
    "then Find the remainder of dividing the result by the fourth number result: " +((n2-n1)*n3)%n4);


console.log("");
console.log("part 2:");

const mile=1500;
const costPerGallon=3;
const money=175; 
const mph1=55; const mpg1=30; //mph= miles per hours mpg=mile per gallon
const mph2=60; const mpg2=28;
const mph3=75; const mpg3=23;
console.log("At 55 miles per hour, you get 30 miles per gallon.");
console.log("How many gallons of fuel will you need for the entire trip?");
console.log("1500/30: about "+(mile/mpg1)+" gallons");
console.log("Will your budget be enough to cover the fuel expense? yes");
console.log("budget is $175, so 50 gallon cost about: $"+(mile/mpg1)*costPerGallon);
console.log("How long will the trip take, in hours?");
console.log("1500/55: "+(mile/mph1)+"hours");

console.log("");
console.log("At 60 miles per hour, you get 28 miles per gallon.");
console.log("How many gallons of fuel will you need for the entire trip?");
console.log("1500/28: "+(mile/mpg2)+" gallons");
console.log("Will your budget be enough to cover the fuel expense? yes");
console.log("budget is $175, so about 53.57 gallon cost about: $"+(mile/mpg2)*costPerGallon);
console.log("How long will the trip take, in hours?");
console.log("1500/60: "+(mile/mph2)+"hours");
console.log("");

console.log("At 75 miles per hour, you get 23 miles per gallon.");
console.log("How many gallons of fuel will you need for the entire trip?");
console.log("1500/23: "+(mile/mpg3)+" gallons");
console.log("Will your budget be enough to cover the fuel expense? NO");
console.log("budget is $175, so about 65.28 gallon cost about: $"+(mile/mpg3)*costPerGallon);
console.log("How long will the trip take, in hours?");
console.log("1500/75: "+(mile/mph3)+"hours");
console.log("");

console.log("Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip? 55 per hour");