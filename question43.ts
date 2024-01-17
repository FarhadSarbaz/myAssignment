/* 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function
 make_great() with a copy of the array of magicians’ names. Because the original array 
 will be unchanged, return the new array and store it in a separate array. Call show_magicians() 
 with each array to show that you have one array of the original names and one array with
  the Great added to each magician’s name.*/

  function show_magicians1(magician:string[]):void{
    for(let i=0; i<magician.length; i++){

        console.log(magician[i])
    }
  }
  let magicianNames1:string[]=["Nastoor", "Zakoota", "Aladin"];
  show_magicians1(magicianNames1);

  function make_great(magician:string[]):void{

    for(let i=0; i<magician.length; i++){

        console.log(magician[i] +" " + "the Great")
    }


    
  }
  let magicianNames2:string[]=["Nastoor", "Zakoota", "Aladin"];
  make_great(magicianNames2)
  let magiciansNamesCopy:string[]=["Nastoor", "Zakoota", "Aladin"]
  make_great(magiciansNamesCopy);

  let returnedMagiciansNames:string[]=["Nastoor the Great", " Zakoota the Great","Aladin the Great" ];
  show_magicians1(magicianNames1);
  show_magicians1(returnedMagiciansNames);
  
  