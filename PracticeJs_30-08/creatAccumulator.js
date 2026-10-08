function createAccumulator(start) {
    let total = start;

    return function(delta = 1){
        total += delta;
        return total;
    };
}

const acc = createAccumulator(10);

console.log(acc());
console.log(acc(5));
console.log(acc(10));