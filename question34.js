"use strict";
/* 34.	Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a
 array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the
 name of the pizza. For each pizza you should have one line of output containing a simple statement
 like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an
  additional sentence, such as I really love pizza!*/
Object.defineProperty(exports, "__esModule", { value: true });
let my_pizza = ["Veggie Pizza", "Pepperoni Pizza", "Meat Pizza"];
for (let i = 0; i < my_pizza.length; i++) {
    console.log(my_pizza[i]);
}
for (let i = 0; i < my_pizza.length; i++) {
    console.log(`I like ${my_pizza[i]}`);
}
console.log(`I like pizza very much. I like ${my_pizza[0]} the most. And I like the ${my_pizza[2]} 
  as well. I really love pizza  `);
