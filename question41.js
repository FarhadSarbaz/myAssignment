"use strict";
/* 41.	Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name
 of each magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magician) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
let magicianNames = ["Nastoor", "Zakoota", "Aladin"];
show_magicians(magicianNames);
