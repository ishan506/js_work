 //closure dat privacy
 function outer (){
   var p=9;
   return function inner(){
   p++;
    
 }
 
}
 const f=outer();
 console.log(f.p);
  f();