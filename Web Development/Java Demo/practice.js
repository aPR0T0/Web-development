
// Objects
let animal = {
    name : "Lion",
    leg : 4
};

// for-in loops
for (const key in animal) {
    console.log(key, animal[key]);
    // if (Object.hasOwnProperty.call(animal, key)) {
    //     cons
    // }
}
console.log(animal.name)

// Arrays
let names = ["Rabbit", "Lion", "Tiger", "Griffin"];

// for-in loops
for(let index in names){
    console.log(names[index])
}

// for-of loops
for(let name of names){
    console.log(name)
}
