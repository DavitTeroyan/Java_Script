function cacheLastCall(fn) {
    let lastArgs;
    let lastResult;

    return function (...args) {
        if (lastArgs && JSON.stringify(args) === JSON.stringify(lastArgs)) {
            return lastResult;
        }

        lastArgs = args;
        lastResult = fn(...args);

        return lastResult;
    };
}

const multiply = cacheLastCall((a, b) => {
    console.log("Calculating...");
    return a * b;
});

console.log(multiply(2, 3));
console.log(multiply(2, 3));
console.log(multiply(4, 5));