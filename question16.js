"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of
your list. • Print a new set of invitation messages, one for each person in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
let myGuests = ["Humayoon", "Shahab", "Jafar"];
console.log(`Mr.${myGuests[2]} is unable to attend the dinner`);
myGuests.pop();
myGuests.push("Tariq");
console.log(`My dear ${myGuests[0]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[1]} I would like to invite you to dinner today. Please honour me 
 by your presence`);
console.log(`My dear ${myGuests[2]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`Dear ${myGuests[0]}, ${myGuests[1]} and ${myGuests[2]}! Luckily we have found
a more spacious table, therefore, we are going to invite more friends`);
myGuests.unshift("Abid");
myGuests.splice(2, 0, "Ghufran");
function append(array, element) {
    return [...array, element];
}
let myGuests1 = ['Abid', 'Humayoon', 'Ghufran', 'Shahab', 'Tariq'];
myGuests = append(myGuests1, "Salman");
console.log(myGuests);
console.log(`My dear ${myGuests[0]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[1]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[2]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[3]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[4]} I would like to invite you to dinner today. Please honour me 
by your presence`);
console.log(`My dear ${myGuests[5]} I would like to invite you to dinner today. Please honour me 
by your presence`);
