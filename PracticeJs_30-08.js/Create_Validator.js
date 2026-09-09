function createValidator(min,max){
    return function check(value)
    {
        return value >= min && value <= max;
    };
}

const checkAge = createValidator(18,30);

console.log(checkAge(20));
console.log(checkAge(35));
console.log(checkAge(18));