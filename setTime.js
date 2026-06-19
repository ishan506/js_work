 /*function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const double = multiply(2);

console.log(double(5)); // 10*/
for(let i=0;i<=3;i++){
 setTimeout(()=>console.log(i),5000);
}
for(var i=0;i<=3;i++){
 setTimeout(function() { console.log(i)},0);
}
 for(var i=8;i<=13;i++){
      ((j)=> {setTimeout (()=>console.log(j),0)

 })(i);
}
 
