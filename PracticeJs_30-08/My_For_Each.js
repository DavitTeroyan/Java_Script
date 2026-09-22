function myForEach(arr,fn) {
    for(let i = 0;i < arr.length;i++)
    {
        fn.call(null, arr[i]);
    }
}

const num = [10,20,30];

myForEach(num, function(el){
    console.log(el);
});

