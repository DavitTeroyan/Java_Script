function myReduce(arr,fn,init){
    let acc = init;

    for(let i = 0;i < arr.length;i++)
    {
        acc = fn(acc,arr[i]);
    }

    return acc;
}

const numbers = [1,2,3,4];

const result = myReduce(numbers,function(acc,curr){
    return acc + curr;
},0);

console.log(result);