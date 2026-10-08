function throttle(fn,delay){
    let lastCall = 0;

    return function(...args){
        const now = Date.now();

        if(now - lastCall >= delay){
            lastCall = now;
            fn(...args);
        }
    };
}

const sayHello = throttle(() => {
  console.log("Hello");
}, 1000);


sayHello();
sayHello();
sayHello();
sayHello();



