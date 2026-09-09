function maxOfThree(a,b,c){
    if((a => b) && (a => c))
    {
        return a;
    }    
    else if((b => a) && (b => c))
    {
        return b;
    }
    else if((c => a) && (c => b))
    {
        return c;
    }
}

console.log(maxOfThree(1,2,3));
console.log(maxOfThree(87,45,32));