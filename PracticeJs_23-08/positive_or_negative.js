var arr = [1, 3, 5, 2, 8, 0, 12, -5, -98]

var positive = arr.filter((el) => el > 0)
console.log(positive);

var negative = arr.filter((el) => el < 0)
console.log(negative);

var zero = arr.filter((el) => el == 0)
console.log(zero);