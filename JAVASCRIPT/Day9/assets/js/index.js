// Task 1

function add(a,b){
    
     return a+b;

}
console.log(add(10,20));


// Task 2

function even(n){

    for(i=1;i<=n;i++){

        if(i%2===0){
           console.log(i);
           
        }
    }

   

}
even(20)

// Task 3

const factorial=(n) => {
let result = 1;
     for(let i=1;i<=n;i++){
         
         result*=i
        }
        return result;
    
}
console.log(factorial(5));

// Task 4


var globalVar = "I am global (var)";
let globalLet = "I am global (let)";
const globalConst = "I am global (const)";

console.log("Global Scope:");
console.log(globalVar);  
console.log(globalLet); 
console.log(globalConst);

// 📦 Function Scope
function demoFunctionScope() {
    var functionVar = "I am function scoped (var)";
    let functionLet = "I am function scoped (let)";
    const functionConst = "I am function scoped (const)";

    console.log("\nInside Function:");
    console.log(functionVar);   
    console.log(functionLet);  
    console.log(functionConst); 
}

demoFunctionScope();

// ❌ Trying to access function-scoped variables outside
// console.log(functionVar);   // Error: not defined
// console.log(functionLet);   // Error: not defined
// console.log(functionConst); // Error: not defined

// 🔒 Block Scope
if (true) {
    var blockVar = "I am block scoped (var?)";
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";

    console.log("\nInside Block:");
    console.log(blockVar);   // Accessible inside block
    console.log(blockLet);   // Accessible inside block
    console.log(blockConst); // Accessible inside block
}

console.log("\nOutside Block:");
console.log(blockVar);   // ✅ var ignores block scope → Accessible
// console.log(blockLet);   // ❌ Error: not defined
// console.log(blockConst); // ❌ Error: not defined




// TaSK 5




console.log("var before declaration:", myVar);   
console.log("let before declaration:", myLet);  
console.log("const before declaration:", myConst); 
console.log("function before declaration:", myFunc()); 

// Declarations
var myVar = "I am var";
let myLet = "I am let";
const myConst = "I am const";

function myFunc() {
    return "I am a function";
}

// ✅ Access after declaration
console.log("\nAfter declaration:");
console.log("var:", myVar);     // "I am var"
console.log("let:", myLet);     // "I am let"
console.log("const:", myConst); // "I am const"
console.log("function:", myFunc()); // "I am a function"



 