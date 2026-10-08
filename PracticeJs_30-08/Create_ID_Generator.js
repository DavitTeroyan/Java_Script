function createIdGenerator(prefix) {
    let counter = 0;

    return function() {
        counter++;
        return `${prefix}-${counter}`;
    };
}

const generateId = createIdGenerator("USER");

console.log(generateId()); 
console.log(generateId()); 
console.log(generateId());