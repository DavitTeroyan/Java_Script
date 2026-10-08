function pipe(...fns) {
    return function(value) {
        return fns.reduce(function(acc, fn) {
            return fn(acc);
        }, value);
    };
}

const result = pipe(
    x => x + 2,
    x => x * 3,
    x => x - 1
);

console.log(result(5)); 
