 const throttle = (func, limit) => {
    let flag = true;

    return function () {
        let context = this;
        let args = arguments;

        if (flag) {
            func.apply(context, args);
            flag = false;

            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
};

const expensive = () => {
    console.log("Expensive Function");
};
//betterExpensive is the throttled version of expensive.
const betterExpensive = throttle(expensive, 10000);

window.addEventListener("resize",betterExpensive);
//window.addEventListener(eventName callbackFunction);