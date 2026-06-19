function x(){
    var x=7;
   return function y(){
        console.log(x);
    }
    
}
    
    let z=x();
     console.log(z);
    z();
    
