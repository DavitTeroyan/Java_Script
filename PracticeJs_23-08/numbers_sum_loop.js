function sum (N){
    let sum = 0;

    for(var i = 1;i <= N; i++){
         sum += i;       
    }
    return sum;
}
console.log(sum(5));