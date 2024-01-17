"use strict";
/*23.	Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate
to False.*/
Object.defineProperty(exports, "__esModule", { value: true });
let number = 10;
// Tests evaluating to True
console.log("Is number == 10? I predict True.");
console.log(number == 10);
console.log("Is number > 5? I predict True.");
console.log(number > 5);
let string1 = 'hello';
let string2 = 'hello';
console.log("Is string1 equal to string2? I predict True.");
console.log(string1 == string2);
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log("Is array1 equal to array2? I predict False.");
console.log(array1 == array2);
let car1 = "honda";
let car2 = "bmw";
console.log("Is boolean1 not equal to boolean2? I predict True.");
console.log(car1 != car2);
// Tests evaluating to False
console.log("Is number < 5? I predict False.");
console.log(number < 5);
console.log("Is number == 20? I predict False.");
console.log(number == 20);
let fruit = 'apple';
console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange');
let object1 = { a: 1, b: 2 };
let object2 = { a: 1, b: 2 };
console.log("Is object1 equal to object2? I predict False.");
console.log(object1 == object2);
let veg = "potato";
console.log("Is veg=== garlic? I predict False.");
console.log(veg == "garlic");
