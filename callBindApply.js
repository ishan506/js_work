 const p= {name :"is"};
 const p2={city : "ko"}
function print (city){
    console.log(this.name + city);
}
const n=print.bind(p, "delhi");
n();