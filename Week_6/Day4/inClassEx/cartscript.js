//dom display of all iems selected id#paymentcart
let cartLocal = JSON.parse(localStorage.getItem("cartLocal")) || [];
let overallPrice = 0;


if (cartLocal.length) {
    // using the forEach method, calculate the total price of each item within our cart array
    cartLocal.forEach((element) => {
      overallPrice += parseInt(element.price, 10);
    });
  }

  document.getElementById("overall-price").innerHTML = `Overall Price: $${overallPrice} USD`;

  document.getElementById("submit").addEventListener("click", () => {
    localStorage.removeItem("cartLocal");
    alert("Cart is cleared!");
  });
  