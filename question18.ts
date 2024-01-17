/* 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show 
that its order has changed.*/

let myplaces=["Balochistan", "Canada","London ", "America","Gilgit"];
console.log(myplaces);
let places = ["Balochistan", "Canada", "London", "America", "Gilgit"];

// Create a sorted copy of the original array
let sortedPlaces = [...places].sort();

// Map the sorted elements back to the original array without changing their order
let sortedOriginal = places.map((_, index) => sortedPlaces[index]);

console.log(sortedPlaces);  
console.log(places)

let places1 = ["Balochistan", "Canada", "London", "America", "Gilgit"];

// Create a copy of the original array and sort it in reverse alphabetical order
let reverseSortedPlaces = [...places1].sort((a, b) => b.localeCompare(a));

// Map the reverse-sorted elements back to the original array without changing their order
let reverseSortedOriginal = places1.map((_, index) => reverseSortedPlaces[index]);

console.log(reverseSortedOriginal);  
console.log(places1)
 places1.reverse();
 console.log(places1);
 places1.reverse();
 console.log(places1)
 places1.sort();
 console.log(places1);
 let reverseSortedPlaces2 = [...places1].sort((a, b) => b.localeCompare(a));
 console.log(reverseSortedPlaces2);



 
