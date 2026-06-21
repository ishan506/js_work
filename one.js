 const throttle=(fn,limit )=>{
 let flag=true;
 const constent =this;
 const args=arguments;
 return function(){
 if(flag){
fn.apply(constent,args);
    flag=false;
    setTimeout(()=>{
flag=true;
    },limit)
 }
}
 }
 const e=()=>{
 console.log("l");
 const me=throttle(e,1000);
window.addEventListener(me,"resize");
 }