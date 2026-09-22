function applyToAll(arr,fn){
    const result = [];
    
    for(let i =0;i < arr.length;i++)
    {
        result.push(fn(arr[i]));
    }

    return result;
}

const array = [2,4,6,8];

const result = applyToAll(array,function(num) {
    return num * 2;
});

console.log(result);