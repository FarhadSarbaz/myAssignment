"use strict";
/* 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original array
 will be unchanged, return the new array and store it in a separate array. Call show_magicians()
 with each array to show that you have one array of the original names and one array with
  the Great added to each magician’s name.*/
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
let magiciansNamesCopy = ["Nastoor", "Zakoota", "Aladin"];
make_great(magiciansNamesCopy);
let returnedMagiciansNames = ["Nastoor the Great", " Zakoota the Great", "Aladin the Great"];
show_magicians1(magicianNames1);
show_magicians1(returnedMagiciansNames);
