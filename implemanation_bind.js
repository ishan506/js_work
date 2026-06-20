const name = {
    firstname: "Akshay",
    lastname: "Saini"
};

function printName(hometown, state, country) {
    console.log(
        this.firstname +
        " " +
        this.lastname +
        ", " +
        hometown +
        ", " +
        state +
        ", " +
        country
    );
}

// Native bind
let printMyName = printName.bind(
    name,
    "Dehradun"
);

printMyName("Uttarakhand", "India");

 
// Polyfill for bind()
//  ll functions can use mybind().

Function.prototype.mybind = function (...args) {

    let fn = this;           // printName function

    let params = args.slice(1); // ["Dehradun"]

    return function (...args2) {

        fn.apply(
            args[0],                 // this -> name object
            [...params, ...args2]    // all arguments
        );

    };
};

// Using custom bind
let printMyName2 = printName.mybind(
    name,
    "Dehradun"
);

printMyName2("Uttarakhand", "India");
