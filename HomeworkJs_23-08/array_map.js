var arr = [1,2,3,4,5];

var arr2 = arr.map(el => {
    return {
        value: el,
        isEven: el % 2 == 0
    }; 
});

console.log(arr2);