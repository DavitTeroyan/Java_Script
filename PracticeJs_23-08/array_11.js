var arr = [5,10,15,20,25];

var arr2 = arr.reduce((el,total) => {
    return total += el;
})
console.log(arr2);