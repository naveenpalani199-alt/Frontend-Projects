// Task 1

let arr=[1,2,3,4,5]

for(i=0;i<arr.length;i++){
      console.log(arr[i]);
      

}

// Task 2

let students = ["Ravi","Rahul","Kumar","Ram","Krishna"]

for (i=0;i<students.length;i++){

    console.log(students[i]);
    
}

// Task 3

let array = [1,2,3,4,5,6,7,8,9,10]

for(i=1;i<array.length;i+=2){

    console.log(array[i]);
    
}

// Task 4

let student = [

    {
      name : "prasanna",
      mark : 95
    },
    {

      name : "praveen",
      mark : 85
    } ,
    {
      name : "karthik",
      mark : 75
    }
]


for(i=0;i<student.length;i++){

    if(student[i].mark>80)
        console.log(student[i].name);
  
}

// Task 5


let add = () => {
    console.log(10 + 20);
    return
}
add()

// Task 6


// Arrow function to return student details
const studentInfo = (name, mark) => `Student Name: ${name}, Mark: ${mark}`;

// Example usage
console.log(studentInfo("Prasanna", 95));
console.log(studentInfo("Praveen", 85));
console.log(studentInfo("Karthik", 75));

