let allTotal = 0;

let addToCart = function (element) {
  let input = element.previousElementSibling;
  let quantity = input.value;
  let product = element.closest(".single-item");
  let price = product.querySelector(".price").innerText;
  let name = product.querySelector(".si-content h3").innerText;

  let cartItems = document.querySelector(".cart-items");

  if (parseInt(quantity) > 0) {
    let total = parseInt(price.slice(1)) * parseInt(quantity);
    allTotal += total;

    cartItems.innerHTML += `<div class ='cart-single-item'>
                             <h3>${name}</h3>
                             <p>${price} x ${quantity} = $<span>${total}</span></p>
                             <button onclick='removeFromCart(this)' class='remove-item'>Ukloni</button>
                             </div>`;
    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");

    document.querySelector(".total").innerText = `Total: $${allTotal}`;
  } else {
    alert("Odaberi kolicinu!");
  }
};

let removeFromCart = function (element) {
  let product = element.closest(".cart-single-item");
  let price = parseInt(product.querySelector("p span").innerText);
  let name = product.querySelector("h3").innerText;
  let vegetables = document.querySelectorAll(".single-item");
  allTotal -= price;
  document.querySelector(".total").innerText = `Total: $${allTotal}`;
  product.remove();
  vegetables.forEach(function (vege) {
    let itemName = vege.querySelector(".si-content h3").innerText;
    if (itemName === name) {
      vege.querySelector(".actions input").value = 0;
      vege.querySelector(".actions button").removeAttribute("disabled");
      vege.querySelector(".actions button").innerText = "Dodaj";
    }
  });
};
