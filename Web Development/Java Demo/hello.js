/*===========Here Goes your program=========*/


// Querry selector just gets the elements and then helps us store that into to variable
let button_doc = document.querySelector('button')

// 
button_doc.addEventListener('click',InputMSG);

// 
function InputMSG(){
    let name = prompt('Enter name of person');
    button_doc.textContent = 'Name 2:' + name;
}