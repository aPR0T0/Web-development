let bread = prompt("Which bread would you like to have : ");
let veggie = prompt("What are your favourite veggies : ");
let sauce  = prompt("Which sauce would you like to have : ");
let cheese = prompt("What type of cheese would you like to have : ");

function makePizza(bread, veggie, sauce, cheese){
    let pizza = bread + " bread " + " with some " + veggie + " and " + sauce + " sauce with " + cheese;
    return pizza;
}

let cheeseBurst = makePizza( bread , veggie , sauce , cheese );
alert("Your " + cheeseBurst + " is ready!! 👍");