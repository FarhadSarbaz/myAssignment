"use strict";
/* 24.	More Conditional Tests: You don’t have to limit the number
 of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than,
greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
//Tests for equality and inequality with strings
let str1 = "Pakistan";
let str2 = "India";
console.log("Is str1 not equal to str2? I predict true");
console.log(str1 !== str2);
console.log("Is str1 equal to str2? I predict false");
console.log(str1 === str2);
//  Tests using the lower case function
let myStr = "pakistan";
console.log("Is myStr is in lowercase? I predict true");
console.log(myStr.toLowerCase() === "pakistan");
console.log("Is myStr is in uppercase? I predict false");
console.log(myStr.toLowerCase() === "PAKISTAN");
