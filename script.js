let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  alert(product + " an kara shi cikin Cart");
  
  document.getElementById("cart-count").textContent = cart.length;
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
function checkout() {
    if (cart.length === 0) {
        alert("Cart ɗinka babu komai.");
        return;
    }
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
    let message = "Assalamu Alaikum, ina son yin oda:%0A%0A";
    let total = 0;

    cart.forEach(item => {
        message += item.product + " - ₦" + item.price + "%0A";
        total += item.price;
    });

    message += "%0AJimilla: ₦" + total;

    window.open(
        "https://wa.me/2348060383939?text=" + message,
        "_blank"
    );
}
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
function showDetails(name, price, description) {
  alert(
    "🛍️ " + name +
    "\n\n💰 Farashi: ₦" + price +
    "\n\n📝 " + description
  );
}
