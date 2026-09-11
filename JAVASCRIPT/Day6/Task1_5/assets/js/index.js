

// Print numbers from 1 to 20 in single line
let result = "";
for (let i = 1; i <= 20; i++) {
    result += i + " ";
}
console.log(result.trim());

//Task 2

let target="";

for(let a=1;a<=50;a++){

    if(a%2===0)

        target += a + " ";
}
console.log(target.trim());


// Task 3

let total = "";

for(let v=1;v<=50;v+=2){

    total+=v+"";
}
    console.log(total.trim());

// Task 4

// Sum of numbers from 1 to 20
let sum = 0;

for (let i = 1; i <= 20; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 20 is: " + sum);


// Task 5

let sum1 = 0;

for (let i = 2; i <= 50; i+=2) {
    sum1 += i;
}

console.log("Sum of numbers from 1 to 50 is: " + sum1);

