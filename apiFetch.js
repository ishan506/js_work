const api_Url="https://invalidfks";
async function handlePromise(){
    try{
const data =await fetch(api_Url);
const jsonvalue=await data.json();
console.log(jsonvalue);
}
catch (err) {
console.log("error" ,err);
}
}

handlePromise();
 //handlePromise().catch((err)=>console.log(err));

