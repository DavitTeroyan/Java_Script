var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2 = arr.reduce((total,el) => {
    return total * el;
}) 
console.log(arr2);