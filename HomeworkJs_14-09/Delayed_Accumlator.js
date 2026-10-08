function delayedAccumulator(start) {
    let total = start;

    return function (number, callback) {
        total += number;

        setTimeout(() => {
            callback(total);
        }, 500);
    };
}

const acc = delayedAccumulator(0);

acc(5, (res) => console.log(res));

setTimeout(() => {
    acc(10, (res) => console.log(res));
}, 500);