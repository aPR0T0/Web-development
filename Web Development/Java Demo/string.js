// A string can be declared using the single and double quotes both ways
// The best way to declare a string

let dream = `Martha exclaimed, "We are one and we can fight anything and win the moment 'we start believing in ourselves'!!"`;
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