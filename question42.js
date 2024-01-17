"use strict";
/* 42.	Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding
 the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
actually been modified.*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians1(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
let magicianNames1 = ["Nastoor", "Zakoota", "Aladin"];
show_magicians1(magicianNames1);
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i] + " " + "the Great");
    }
}
let magicianNames2 = ["Nastoor", "Zakoota", "Aladin"];
make_great(magicianNames2);
