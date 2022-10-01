let button_doc = document.querySelector('button')
button_doc.addEventListener('click',InputMSG);
function InputMSG(){
    let name = prompt('Enter name of person');
    button_doc.textContent = 'Name 2:' + name;
}