function deepMemoize(fn){
    const cache = new Map();

    return function(...args){
        const key = JSON.stringify(args);

        if(cache.has(key)){
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key,result);

        return result;
    };
}

const sum = deepMemoize((obj) => obj.a + obj.b);

console.log(sum({ a: 2, b: 3}));
console.log(sum({ a: 2, b: 3}));
