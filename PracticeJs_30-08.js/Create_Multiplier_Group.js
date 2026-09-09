function createMultiplierGroup(factors) {
    return factors.map(function(factor) {
        return function(value) {
            return value * factor;
        };
    });
}

const multipliers = createMultiplierGroup([2, 3, 5]);

console.log(multipliers[0](10));  
console.log(multipliers[1](10)); 
console.log(multipliers[2](10)); 
