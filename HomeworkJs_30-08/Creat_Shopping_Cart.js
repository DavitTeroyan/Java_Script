function createShoppingCart() {
  let cart = [];

  function addItem(item, price) {
    cart.push({
      item,
      price
    });
  }

  function removeItem(item) {
    cart = cart.filter(product => product.item !== item);
  }

  function getCart() {
    return [...cart];
  }

  function getCartTotal() {
    return cart.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  return {
    addItem,
    removeItem,
    getCart,
    getCartTotal
  };
}



const shoppingCart = createShoppingCart();

shoppingCart.addItem("Apple", 500);
shoppingCart.addItem("Milk", 700);
shoppingCart.addItem("Bread", 400);

console.log(shoppingCart.getCart());

console.log(shoppingCart.getCartTotal());

shoppingCart.removeItem("Milk");
console.log(shoppingCart.getCartTotal());
