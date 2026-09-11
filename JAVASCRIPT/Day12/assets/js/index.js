// Task 1

const arr = [1,2,3,4,5]

arr.push(6,7,8)

console.log(arr);

// Task 2

const fruits = ["Apple","Banana","Orange","Watermelon","Grapes","sugarcane"]

console.log(fruits);


fruits.pop()
fruits.pop()

console.log(fruits);

// Task 3

const city = ["Chennai","Bangalore","Delhi","Mumbai","Kolkata"]

console.log(city);

city.shift()
console.log(city);

city.unshift("Goa")
console.log(city);


// Task 4

const array = ["1.Arun","2.Bala","3.Kumar","4.Harish","5.Prasanna"]

array.forEach((student)=>{

    console.log(student);
    


})

// Task 5

const array1 = [1,2,3,4,5]

const result= array1.map((numbers)=>{

    return numbers*10;
    
})
console.log(result);
console.log(array1);





