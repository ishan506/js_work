 /*const a=[1,2,3];
 const [first , ...rest]=a;
 console.log(first);
  console.log(rest);*/
   function sum(...num){
return num.reduce ((acc,curr)=>acc+curr ,0);

   }
   console.log(sum(1,2,3,4,5));