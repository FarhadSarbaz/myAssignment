"use strict";
/* 2.	Name Cases: Store a person’s name in a variable, and then print that person’s name in
  lowercase, uppercase, and titlecase.*/
Object.defineProperty(exports, "__esModule", { value: true });
let myName = "farhad";
// convert to lower case
console.log(myName.toLowerCase());
// convert to upper case
console.log(myName.toUpperCase());
// convert to title case
let str = "farhad";
function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase(`my name is muhammad farhad`));
