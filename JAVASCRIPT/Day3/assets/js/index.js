//Task -1

let a=20;
let b=5;


console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Task-2

let score =100;
console.log(score);

score +=100;
console.log(score);

score -=100;
console.log(score);

score /=100;
console.log(score);

score %=100;
console.log(score);

//Task - 3

let age=22;


console.log("Age: " + age);


console.log("age == 22: " + (age == 22));   // true (checks value only)
console.log("age === 22: " + (age === 22)); // true (checks value + type)
console.log("age > 18: " + (age > 18));     // true
console.log("age < 18: " + (age < 18));     // false
console.log("age >= 18: " + (age >= 18));   // true
console.log("age <= 18: " + (age <= 18));   // false

// Task -4

// Initial values
let age1 = 20;
let hasId = true;

console.log("Age: " + age1);
console.log("Has ID: " + hasId);

// 1. Age is 18 or above AND has ID
console.log("Age >= 18 AND has ID: " + (age1 >= 18 && hasId));

// 2. Age is below 18 OR has ID
console.log("Age < 18 OR has ID: " + (age1 < 18 || hasId));

// 3. NOT hasId
console.log("NOT hasId: " + (!hasId));


// Task 5

let count =10;
console.log(count);

count++;
console.log(count);

count++;
console.log(count);

count--;
console.log(count);

count--;
console.log(count);

//Bonus Task

let number = 10;

// Using % (modulus) and ===
if (number % 2 === 0) {
    console.log(number + " is EVEN");
} else {
    console.log(number + " is ODD");
}


   











