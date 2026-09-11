// Task 1


let age=25;

if (age>=18) {
   console.log("Eligible");
    
}else 
{
  console.log("Not eligible");
  
}

// Task 2

let number=15;

if (number%2===0) {
    console.log("even");
    
} else {
    console.log("odd");
    
}

//Task 3

let mark=85;

if (mark>=90) {
    console.log("A+ Grade");
    
} else if(mark>=75){
    console.log("A Grade");
    
}else if(mark>=50){
    console.log("B Grade");
    
}else if(mark>=35){

    console.log("C Grade");
}else{
    console.log("Fail");
    
}

//Task 4

let username="admin";
let password=1234;

if (username==="admin"&&password===1234) {
    console.log("Login Successfull");
    
} else {
    console.log("Invalid Login");
    
}

//Task 5

let day=3;

switch (day) {
     case 1:
        console.log("Monday");
        break;
     case 2:
        console.log("Tuesday");
          break;
     case 3:
        console.log("Wednesday");
          break;
     case 4:
        console.log("Thursday");
          break;
     case 5:
        console.log("Friday");
          break;
     case 6:
        console.log("Saturday");
          break;
     case 7:
        console.log("Sunday");   
        
        break;

    default:"Invalid Day"
        
}