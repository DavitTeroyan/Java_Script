function once(fn) {
    let called = false;

    return function() {
        if (called) {
            return undefined;
        }

        called = true;

        return fn();
    };
}

const hello = once(function() {
    console.log("Hello!");
});

hello(); 
hello(); 
hello(); 
