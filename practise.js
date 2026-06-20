 const promise =order(card);
 promise.then (function (orderId){
return process(orderId);
 })
 //without return  ,then undefine 
 .then(function(processInfo){
    console.log("k");
 })
 .catch(function (err){

 })
 function order(card){
    return new Promise(function (resolve ,reject){
        if(card){
            resolve("s1")
        }
        else{
            reject("e")
        }
    })
 }