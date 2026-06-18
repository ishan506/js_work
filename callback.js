function p(){
    console.log("hello");
}
//A callback function must be received and called by another function.
function pi(callback){
     callback();
     console.log("h");
}
pi(p);