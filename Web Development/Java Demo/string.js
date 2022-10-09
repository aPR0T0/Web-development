

//////////////////////////////////////////////////////////////////////////////////////////////////////
/*-------------------------------------Normal String Declaration----------------------------------- */
//////////////////////////////////////////////////////////////////////////////////////////////////////

// A string can be declared using the single and double quotes both ways
// The best way to declare a string
let string4 = "let's have some fun!!";
let dream = `Martha exclaimed, "We are one and we can fight anything and win the moment 'we start believing in ourselves'!! so!, ${string4}"`;
console.log(dream);

// declaring a string using escape to resolve syntax conflicts
let string = 'You\'ve made a string';
console.log(string, "which of " + typeof string + " type ");

//concatenation
let string1 = "Hello! ";
let string2 = "\"This is PROTO and you are welcomed\"";

let badaString = string1 + string2;
console.log(badaString);

//  string + some number
console.log("string" + 100);

// number's in strings and vice versa concatenation
console.log('20' + '04');
console.log( 20  +  04 );

// string to number and vice versa
let s1 = '100';
s1 = Number(s1);
console.log(s1,"with data type " + typeof s1);
s1 = s1.toString();
console.log(s1,"with data-type " + typeof s1);

//////////////////////////////////////////////////////////////////////////////////////////////////////
/*------------------------------------Functions in strings------------------------------------------*/
//////////////////////////////////////////////////////////////////////////////////////////////////////

var favIceCream = " Butter Scotch";
let i = 5;
console.log(`${favIceCream.length, favIceCream[i].toString()} is it's ${i}th letter and the last letter is ${favIceCream[favIceCream.length-1].toString()} we can also get the index using IndexOf function i.e. ${favIceCream.indexOf("But")}`);

// String can also be sliced

let someString = favIceCream.slice(5,10);
console.log(someString);

// uppercase and lowercase

var someString2 = "This WAs some String";
console.log(someString2.toUpperCase());
console.log(someString2.toLowerCase());

