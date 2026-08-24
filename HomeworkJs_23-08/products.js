 const products = [
      { name: "Laptop",  price: 1200 },
      { name: "Phone",   price: 800  },
      { name: "Tablet",  price: 450  },
      { name: "Monitor", price: 350  },
      { name: "Headset", price: 150  },
    ];

var arr = products.filter(el => el.price > 500);
console.log(arr);
 var arr2 = products.map(el => `${el.name} - $${el.price}`);
 console.log(arr2);
 var arr3 = products.reduce((total,el) => total + el.price, 0);
console.log(arr3);