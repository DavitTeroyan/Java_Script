const isEven = (num) => {
    if(num % 2 == 0)
    {
        return true;
    }
    else if(num % 2 != 0)
    {
        return false;    
    }
}
console.log(isEven(6));