const first= ()=>{
     console.log("run");
     

}
const second = (call)=>{
    console.log("Loading....");
    call()
}
second(first)


