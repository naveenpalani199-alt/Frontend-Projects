const name = document.getElementById("name")
const age = document.getElementById("age")
const city = document.getElementById("city")
const button = document.getElementById("saveBtn")




const students = [
    {
        name: "Arun",
        age: 22,
        city: "Chennai"
    },
    {
        name: "Bala",
        age: 23,
        city: "Madurai"
    },
    {
        name: "Kumar",
        age: 21,
        city: "Coimbatore"
    }
];

const output = document.getElementById("output");

students.forEach((student) => {
    output.innerHTML += `
        <div>
            <h2>${student.name}</h2>
            <p>Age: ${student.age}</p>
            <p>City: ${student.city}</p>
        </div>
        <hr>
    `;
});