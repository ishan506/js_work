 const p={
  name :"is"
 }
 function pi(bat ,bowl){
  console.log(this.name ,bat ,bowl);
 }
 const po=pi.bind(p ,"kl" );
 po("jb");

 Function.prototype.mybind =function (...args){
  let fn=this;
  let params=args.slice(1);
  return function (...arg2){
 fn.apply( args[0],[...params,...arg2]);
 }
}
const j= pi.mybind( p,"kl");
j("jb");