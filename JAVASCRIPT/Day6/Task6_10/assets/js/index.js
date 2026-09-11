// Task 6

// Count even numbers from 1 to 100
let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Even Count: " + count);


// Task 7

// Find number 73 in loop
for (let i = 1; i <= 100; i++) {
    if (i === 73) {
        console.log("Found: " + i);
        break; // stop the loop once 73 is found
    }
}

// Task 8

// Reverse a number using for loop
let number = 12345;
let reverse = 0;

for (; number > 0; ) {
    let digit = number % 10;        // last digit
    reverse = reverse * 10 + digit; // build reversed number
    number = Math.floor(number / 10); // remove last digit
}

console.log(reverse);


// Task 9

// Reverse a string using for loop
let name = "javascript";
let reversed = "";

for (let i = name.length - 1; i >= 0; i--) {
    reversed += name[i];
}

console.log(reversed);

// Task 10


// Find character in string using for loop
let text = "javascript";
let target = "s";

for (let i = 0; i < text.length; i++) {
    if (text[i] === target) {
        console.log("Character Found: " + target);
        break; 
    }
}
