 const arr=[1,2,3];
 /*function d(x){
return x*2;
 }
 const o=p.map(d);
 console.log(o);*/
 function b(x){
    return x.toString(2);
 }
 const o=arr.map/*((x)=>
 x.toString(2));*/ (b);
console.log(o); 
