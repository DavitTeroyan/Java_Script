function memoize(fn) {
    const cache = new Map();

    return function(value) {
        if(cache.has(value)){
            return cache.get(value);
        }

        const result = fn(value);

        cache.set(value,result);

        return result;
    };
}

function square(num) {
    console.log("Calculating...");
    return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
