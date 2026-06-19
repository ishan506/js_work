/*function add (a){
    return function (b){
        return a+b;
    };
    
}
    in multiply const multi10=multi(10);
console.log(add(2)(4));*/
 function multi(x,y){
     {
        return x*y;
    }
   

 }
  const multip=multi.bind(this,10);
  console.log(multip(4));