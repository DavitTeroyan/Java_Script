function createPolling(fn, interval) {
    const timer = setInterval(fn, interval);

    return function stop() {
        clearInterval(timer);
    };
}

const stop = createPolling(() => {
    console.log("Polling...");
}, 1000);

setTimeout(() => {
    stop();
}, 5000);