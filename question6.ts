/* 6.	Stripping Names: Store a person’s name, and include some whitespace characters 
at the beginning and end of the name. Make sure you use each character combination, 
"\t" and "\n", at least once. Print the name once, so the whitespace around the name is
 displayed. Then print the name afterstriping the white spaces.*/






let perNameWithWhiteSpace = " \t \n Ali \t \n";
console.log(perNameWithWhiteSpace);

let perNameWithoutWhiteSpace= perNameWithWhiteSpace.trim();
console.log(perNameWithoutWhiteSpace);