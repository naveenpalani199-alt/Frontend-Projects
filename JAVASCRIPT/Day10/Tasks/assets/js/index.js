// Task 1


function scopeDemo() {
    if (true) {
        var a = "var inside block";
        let b = "let inside block";
        const c = "const inside block";
    }
    console.log(a); // ✅ Accessible (function/global scope)
    // console.log(b); // ❌ Error: b is not defined
    // console.log(c); // ❌ Error: c is not defined
}
scopeDemo();


var x = 10;
var x = 20; 
console.log("var redeclared:", x);

let y = 30;


const z = 50;


// 3. Reassignment
let city = "Chennai";
city = "Bangalore"; // ✅ Allowed
console.log("let reassigned:", city);

const country = "India";


const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed (mutating contents)
console.log("const array mutated:", arr);

// 4. Hoisting
console.log(hoistedVar); // ✅ undefined
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ❌ ReferenceError (TDZ)
let hoistedLet = "I am let";

// console.log(hoistedConst); // ❌ ReferenceError (TDZ)
const hoistedConst = "I am const";

// 5. TDZ Demo
function tdzDemo() {
    // console.log(num); // ❌ ReferenceError (TDZ)
    let num = 100;
    console.log("Declared after TDZ:", num);
}
tdzDemo();


// Task 2

// Explicit return 

const add = (a, b) => {
    return a + b;
};

const square = (n) => {
    return n * n;
};

// implicit 

const add1 =(a,b) => a+b;
const square1 =(n) => n*n;

// Task 3

// Array Destructuring

const numbers = [10, 20, 30];

// Extract values
const [first, second, third] = numbers;

console.log("First:", first);   
console.log("Second:", second);
console.log("Third:", third);   

// Object Destructuring

const student = {
    name: "Ravi",
    age: 25,
    course: "JavaScript"
};

// Extract values
const { name, age, course } = student;

console.log("Name:", name);   
console.log("Age:", age);   
console.log("Course:", course); 


// Task 4


const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(10, 20, 30, 40)); 

// Task 5

// Function with default parameter and template literal
function introduce(name, course, city = "Chennai") {
    return `My name is ${name}, I am studying ${course}, and I live in ${city}.`;
}

// Example calls
console.log(introduce("Ravi", "JavaScript")); 


console.log(introduce("Arun", "Python", "Coimbatore")); 

// Task 6



class Student {
    constructor(name, age, mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    // Method to display details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Mark: ${this.mark}`);
    }
}


const student1 = new Student("Ravi", 22, 85);
const student2 = new Student("Arun", 23, 90);


student1.displayDetails();
student2.displayDetails();

// Task 7

// Create a Promise that resolves after 2 seconds
function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000); // 2-second delay
    });
}

// --- Handling with .then() ---
loadData().then((message) => {
    console.log("Using .then():", message);
});

// --- Handling with async/await ---
async function fetchData() {
    const result = await loadData();
    console.log("Using async/await:", result);
}

fetchData();

// Task 8

const user = {
    name: "Ravi"
};

// Safely access city
const city1 = user.address?.city ?? "City Not Available";

console.log(`Name: ${user.name}, City: ${city1}`);

// Task 9

const numbers1 = [10, 25, 30, 45, 50, 65];


const greaterThan30 = numbers.filter(num => num > 30);
console.log("Numbers > 30:", greaterThan30);


const firstGreaterThan40 = numbers.find(num => num > 40);
console.log("First number > 40:", firstGreaterThan40);


const has50 = numbers.includes(50);
console.log("Does 50 exist?", has50);


const doubled = numbers.map(num => num * 2);
console.log("Doubled values:", doubled);


// Task 10

// ES5+

var name1 = "Ravi";
var age1 = 25;

var student3 = {
    name1: name1,
    age1: age1
};

var greet = function(name1) {
    return "Hello " + name1;
};

console.log(greet(name1));

// ES6+

const name2 = "Ravi";
const age2 = 25;

// Object shorthand
const students = { name2, age2 };

// Arrow function + template literal
const greet1 = (name2) => `Hello ${name2}`;

console.log(greet1(name2));








