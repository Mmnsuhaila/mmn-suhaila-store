let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " an ƙara shi cikin Cart.");
}

function viewCart() {
  let message = "KAYAN DA KE CART:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += item.product + " - ₦" + item.price + "\n";
    total += item.price;
  });

  message += "\nJimilla: ₦" + total;

  alert(message);
}
