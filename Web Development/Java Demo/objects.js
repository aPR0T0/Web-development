// Camel case for normal function
function createCourse(){
    const course = {
        lecture : 10,
        section : 3 ,
        title   : 'Javascript',
        notes   :{
            introduction : "Welcome to PROTOs JS Course"
        }, // Note this comma is really important
        enroll(){
            console.log('You have successfully logged in');
        }
    }
    return course; // this works but voilates certain set of rules like it increases the time complexity unnecesarrily
    // the concept voilated here is 'trie' because certain things are repeating
}

const course = createCourse();
course.enroll();

// Pascal case for constructors
function Course(title){
    this.title = title; // 'this' keyword actually makes this function a constructor which can be easily used as the constructor
    this.enroll = function (){
        console.log("Dekho aap phir aagaya, mann nhi bhara na!");
    }
    // return this; we don't need to go through this return if we use the new keyword while assigning the constructor to a variable
}

const coursex = new Course('Javascript');
coursex.enroll();

// simple delete keyword is used to delete any object or variable from the specified objects
delete course.title;
console.log(course.title);

// we can also explicitly declare any function in the initialized constructor
coursex.courseEnroll = function(){
    console.log("kucch zyada hi bacche aagaye hain ab itne ki capacity hai bhi ya nhi dekhna padega");
}

delete coursex.title
console.log(coursex);

// Everything javaScript is an object 😂 
// to check the same just write <name>.constructor

// here we used the function and which was created internally by the javascript code as the object constructor
console.log(course.constructor);
// here we already defined the constructor from our end
console.log(coursex.constructor);

// Let's see is the function itself a data-type or not
// this is how actually javascript interpret your each and every object
const coursey = new Function(
    'title',
    `this.title = title,
    this.enroll = function (){
        console.log("Dekho aap phir aagaya, mann nhi bhara ha!");
    }
    ` )

const course2 = new coursey('Java');
course2.enroll();


// Primitive datatypes
let number = 10;
//pass by value
let number_2 = number;

console.log(number);
console.log(number_2);

// reference the data-type;
let obj = {number:10}; // so we have stored it's memory location in the object
let obj2 = obj;

obj.number = 11; // see by altering this the values in both obj1 and obj changes because we are directly altering the object from it's core location

console.log(obj2);

// just found something funny
numx = 10+9+'str'
console.log(numx);

// Cloning in the JS
const coursez = {
    title : 'Something',
    enroll(){
        console.log(`Why didn't you come early ha?`);
    }
}

// this is how you clone
// const course_1 = {...course}; //1 
// Second way of doing the same thing
const course_1 = Object.assign({},coursez); //2
// So, 1 and 2 are basically the same thing
console.log(course_1);

course_1.lecture = 'C++';

// This means tha this method is just cloning by value and doesn't use pass by reference way
console.log(course_1);
console.log(course);

// lets see some loops
for(let key in coursex){
    console.log(key,coursex[key]);
}
for ( let key of Object.keys(course_1)){
    console.log(key, course_1[key]);
}
const course_3 = {};
for (let key of Object.keys(course)){
    course_3[key] = course[key];
}
console.log(course_3);