// Task 1

const processNumber =()=>{

    console.log(10);
    
}
const execute = (callback)=>{
    callback();
}
execute(processNumber)

// Task 2

const createCounter = () =>{

    let count=0;

    return ()=>{

        count+=1;
        return count;
    }
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Task 3

let arr = ["apple","orange","watermelon","pineapple","coconut"]

console.log(arr);
arr.push("egg","milk");
console.log(arr);
arr.pop()
console.log(arr);

// Task 4

let arr1=["pulsar","apache","splendor","xl"]

arr1.unshift("bullet350")
console.log(arr1);

arr1.shift()

console.log(arr1);

// Task 5



const numbers = [10,20,30]
const arr2=[]

for (let i=0;i<numbers.length;i++){

    arr2[i]=numbers[i];
}
arr2[arr2.length]=40;

console.log(arr2);


// Task 6

const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

fruits.push("banana")
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift("grapes")
console.log(fruits);

fruits.shift()
console.log(fruits);


const result = fruits.concat(vegetables)

console.log(result);







