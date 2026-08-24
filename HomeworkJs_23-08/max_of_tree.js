function maxOfTree(a,b,c){
    if((a > b) && (a > c))
    {
        return a;
    }    
    else if((b > a) && (b > c))
    {
        return b;
    }
    else if((c > a) && (c > b))
    {
        return c;
    }
}

console.log(maxOfTree(1,2,3));
console.log(maxOfTree(87,45,32));