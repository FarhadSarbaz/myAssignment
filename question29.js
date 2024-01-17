"use strict";
/* 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of
 independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let myFruits = ["Mango", "Apple", "Guava", "Melon"];
if (myFruits.includes("Apple")) {
    console.log(` I love Apple`);
}
if (myFruits.includes("Mango")) {
    console.log(` I love Mango`);
}
if (myFruits.includes("Guava")) {
    console.log(` I love Guava`);
}
if (myFruits.includes("Melon")) {
    console.log(` I love Melon`);
}
let favourite_fruit = ["Strawberry", "Cherry", "Banana"];
if (favourite_fruit.includes("Strawberry")) {
    console.log(`I relly like Strawberries`);
}
if (favourite_fruit.includes("Cherry")) {
    console.log(`I relly like Cherries`);
}
if (favourite_fruit.includes("Banana")) {
    console.log(`I relly like Bananas`);
}
if (favourite_fruit.includes("Apple")) {
    console.log(`I relly like Apples`);
}
if (favourite_fruit.includes("ango")) {
    console.log(`I relly like Mangos`);
}
