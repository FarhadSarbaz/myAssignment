"use strict";
/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can
 invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop
 a name from your list, print a message to that person letting them know you’re sorry you can’t invite
  them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
 actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let myGuests2 = ["Abid", "Humayoon", "Ghufran", "Shahab", "Tariq", "Salman"];
console.log(`my dear friends ${myGuests2[0]}, ${myGuests2[1]}, ${myGuests2[2]}, ${myGuests2[3]}, 
 ${myGuests2[4]} and ${myGuests2[5]}! it is regrettfully announced that our new reserved table is unable 
 to arrive timely and we have space for only two persons. `);
let removedGuest1 = myGuests2.pop();
console.log(`my dear friend ${removedGuest1}! I am very sorry for I am unable to invite you to dinner`);
let removedGuest2 = myGuests2.pop();
console.log(`my dear friend ${removedGuest2}! I am very sorry for I am unable to invite you to dinner`);
let removedGuest3 = myGuests2.pop();
console.log(`my dear friend ${removedGuest3}! I am very sorry for I am unable to invite you to dinner`);
let removedGuest4 = myGuests2.pop();
console.log(`my dear friend ${removedGuest4}! I am very sorry for I am unable to invite you to dinner`);
console.log(`Dear ${myGuests2[0]} and ${myGuests2[1]}! you both are still invited to dinner `);
myGuests2.pop();
myGuests2.pop();
console.log(myGuests2);
