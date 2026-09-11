const promise=new Promise((resolve, reject) => {
    const execute=false

    if(execute){
        console.log("Executed");
        
    }else{
        console.log("Not Executed");
        
    }
})
promise.then((result)=>{
    console.log(result);
    
})

promise.catch((error)=>{

    console.log(error);
    
})
promise.finally(()=>{
    console.log("Executed Successfully");
    
})

