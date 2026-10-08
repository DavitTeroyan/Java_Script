var arr = ["anna","bob","charlie","diana"]

var arr2 = arr.map(el => {
    return el[0].toUpperCase() + el.slice(1);
});
console.log(arr2);