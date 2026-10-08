var arr = [10,-3,5,-7,0,8,-1,4];

var arr2 = arr.filter((el) => el > 0);
var arr3 = arr2.reduce((total,el) => {
   return total += el;
})
console.log(arr2);
console.log(arr3);