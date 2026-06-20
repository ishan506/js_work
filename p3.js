const p = new Promise(function (resolve, reject) {
    let success = true;

    if (success) {
        resolve("Order Created");
    } else {
        reject("Order Failed");
    }
});
/*
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Payment Successful");
    }, 2000);
});

p.then((res) => {
    console.log(res);
})
    .catch((err) => {
    console.log("Error:", err);
});
*/
 
