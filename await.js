//without await
const p=new Promise((resolve,reject)=>
{ setTimeout (()=>{
    resolve("r")},1000);
});
  function data(){


 
  p.then((res)=>
console.log(res));
  console.log("n");
}
data();