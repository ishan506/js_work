const p=new Promise((resolve,reject)=>
{
    resolve("r");
});
 
 async function data(){
    return p ;
 }
 const dataPromise=data();
 console.log(dataPromise);
 dataPromise.then((res)=>
console.log(res));
 