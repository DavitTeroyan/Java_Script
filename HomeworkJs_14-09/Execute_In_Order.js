function executeInOrder(fns) {
    function next(index) {
        if (index >= fns.length) {
            return;
        }

        fns[index]();

        setTimeout(() => {
            next(index + 1);
        }, 100);
    }

    next(0);
}

executeInOrder([
    () => console.log("A"),
    () => console.log("B"),
    () => console.log("C")
]);