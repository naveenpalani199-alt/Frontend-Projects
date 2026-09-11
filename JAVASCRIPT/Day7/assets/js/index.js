// Task 1

let fruits = ["Apple","Orange","Jack fruit","Watermelon","Banana"];

for(i=0;i<fruits.length;i++ ){

    console.log(fruits[i]);
    
}

// Task 2

let student = 

  {
     name : "ram",
     age : 22,
     course : "Maths",   
     mark : 75

  }
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.mark);

// Task 3

let students = [

    {
     name : "vikram",
     age : 21,
     course : "python",   
     mark : 85

    },

    {
     name : "ram",
     age : 22,
     course : "Maths",   
     mark : 75

    },

    {
     name : "krishna",
     age : 23,
     course : "physics",   
     mark : 95

    }
]
for(i=0;i<students.length;i++){

    console.log(students[i]);
    
}

// Task 4

let students1 = [
     {
     name : "vikram",
     age : 21,
     course : "python",   
     mark : 85

    },

    {
     name : "ram",
     age : 22,
     course : "Maths",   
     mark : 75

    },

    {
     name : "krishna",
     age : 23,
     course : "physics",   
     mark : 95

    }

]
let target = "krishna";


for(i=0;i<students1.length;i++){

    if (students1[i].name===target)
        console.log(students1[i].name);
        console.log(students1[i].mark);
        break;
        
        
}


// Task 5


let employees = [

   {
    name : "mathavan",
    salary : 50000
   },
    {
    name : "kumar",
    salary : 100000
   },
    {
    name : "karthik",
    salary : 30000
   }

]

for(i=0;i<employees.length;i++){

    if(employees[i].salary > 40000)
        console.log(employees[i].name);
        console.log(employees[i].salary);
       
        
}



