/* 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default
 with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the
  default message, and a shirt of any size with
 a different message.*/

 function make_shirt(message:string="I love Tpescript", size:string="L"){
    console.log(message, size)

 }
 make_shirt()
 make_shirt(undefined,"M")
 make_shirt("Spread Kindness everywhere","Any")