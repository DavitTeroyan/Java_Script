function limitCalls(fn,maxCalls){
    let count = 0;

    return function(...args){
        if (count >= maxCalls){
            return null;
        }

        count++;
        return fn(...args);
    };
}

function hello(name) {
    return `Hello, ${name}`;
}

const limitedHello = limitCalls(hello, 3);

console.log(limitedHello("Davit")); // Hello, Davit
console.log(limitedHello("Ani"));   // Hello, Ani
console.log(limitedHello("Aram"));  // Hello, Aram
console.log(limitedHello("John"));  // null
console.log(limitedHello("Mike"));  // null