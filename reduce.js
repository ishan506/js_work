// simple way 
/*const arr =[5,6,7];
function findsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
 
console.log(findsum(arr));*/
//reduce way
 const arr=[2,3,4];
 const o=arr.reduce(function (acc,cur){
acc+=cur;
return acc;
},0);
console.log(o);
 