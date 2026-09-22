function memoizeWithExpiry(fn, timeLimit) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);
        const now = Date.now();

        if (cache.has(key)) {
            const saved = cache.get(key);

            if (now - saved.time < timeLimit) {
                return saved.value;
            }
        }

        const value = fn(...args);

        cache.set(key, {
            value: value,
            time: now
        });

        return value;
    };
}

function add(a, b) {
    console.log("Calculating...");
    return a + b;
}

const memoizedAdd = memoizeWithExpiry(add, 3000);

console.log(memoizedAdd(2, 3));
console.log(memoizedAdd(2, 3));