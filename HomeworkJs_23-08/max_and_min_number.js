var arr = [5,3,8,1,9,2,7,4,6];

let max = arr[0];

for(let i = 0;i < arr.length;i++)
{
    if(arr[i] > max)
    {
        max = arr[i];
    }   
}

console.log(max);

let min = arr[0];

for(let i = 0;i < arr.length;i++)
{
    if(arr[i] < min)
    {
        min = arr[i];
    }
} 

console.log(min);