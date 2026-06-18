const arr=[1,2,4];
function isodd(x){
return x%2==0;
//odd
//return x%2;
}
const output=arr.filter(isodd);
console.log(arr.filter(isodd));
console.log(output);