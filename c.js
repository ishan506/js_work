function x(){
    var x=7;
    function y(){
        console.log(x);
    }
    return y;
}
    
    let z=x();
     console.log(z);
    z();
    
