const p=new Promise((resolve,reject)=>
{ setTimeout (()=>{
    resolve("r")},1000);
});
//AWAIT IS USED ONLY INSIDE THE ASYNC

async function handlePromise(){
   console.log("no"); 
const val=await p;
console.log("n");
console.log(val);
const val2=await p;
console.log("n");
console.log(val2);
}
handlePromise();