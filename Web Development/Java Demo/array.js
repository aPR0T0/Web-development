// ways of declaring an array

//1
const num = new Array(0,1,2,3,4,5,6,7,9,10);

//2
const num2 = [0,1,2,3,4,5,6,7,8,9,10];

//printing
console.log(num);
console.log(num2);

// now let's see appending, FIFO LIFO in arrays through in-built JS functions
// popping from back
num.pop();
num

// pushing from back
num.push(10);
num

// popping from front
num2.shift()
num2

//pushing from front
num2.unshift(0);
num2

// changing the const array's elements
num[0] = 3 //this it the only way to change the constant array
num

const names = ['NASA', 'Alqama', 'ISRO', 'Tesla', 'SkyRoot Aerospace', 'Alqama']
console.log(names.indexOf('Alqama',2)) // this gives the index of the element which is present after the given index
// so if the same element is present in the front of the given array and we want the index of the later element so we can put the later index as the fromIndex after the comma and get the actual index of the object

// this will give us the last occurrence of the repeated element
console.log(names.lastIndexOf('Alqama'))

// Now, includes function gives us the boolean information whether the array contains the given object or not
console.log(names.includes('NASA'));
console.log(names.includes('ISRO',3));


let channels = [{
    name: 'aPR0T0',
    subscriber: 100
},
{
    name: 'Gardening',
    subscriber: 20
},
{
    name: 'Alqama Shaikh',
    subscriber: 300
}];

// includes and all these functions work only on the primitive data_types and doesn't work on the referrence data_types
console.log(channels.includes({
    name: 'Gardening',
    subscriber: 20
}))

// Too overcome this problem we will use find and it will only return the object which contains the specific property
console.log(channels.find(function(element){
    return element.name === 'Gardening'
}));

console.log(channels.find(element => element.name === 'Alqama Shaikh'))

let naam = ['Aarib', 'Alqama', 'Ameen']
let naam2 = ['Hai koi toh', 'Kyu hai jo bhi hai']

console.log(naam.concat(naam2))

// Concat needs to be stored in a one or the other form
naamChin = naam.concat(naam2)
console.log(naamChin)

// Now, let's slice the array by just getting a subarrat with certain starting and end index
console.log(naamChin.slice(0,2))