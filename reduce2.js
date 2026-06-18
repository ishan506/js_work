const usser=[1 , 2 ,3 ,4];
const output= usser.reduce (function(acc, cur){
    if(acc [cur]){
        acc=cur;
    }
    return acc;
});
console.log(output);

