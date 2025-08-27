import cloth from "./Q26_product.js";

let clothContainer = document.getElementById("cloth");
let cartContainer = document.getElementById("cart");
let totalBox = document.getElementById("total");

let cartItems = {}; // object with id as key
let total = 0;

// PRODUCTS RENDER
clothContainer.innerHTML = cloth.map((obj) => {
  return `
    <div class="A1">
      <p>${obj.desc}</p>
      <img src="${obj.img}" alt="img" height="150px" width="150px">
      <h3>Price: ₹${obj.price}</h3>
      <button onclick="addProduct(${obj.id})">Add</button>
      <button onclick="removeProduct(${obj.id})">Remove</button>
    </div>
  `;
}).join("");

// ADD PRODUCT
window.addProduct = (id) => {
  let item = cloth.find((p) => p.id === id);
  if (item) {
    if (!cartItems[id]) {
      cartItems[id] = { ...item, qty: 1 };
    } else {
      cartItems[id].qty++;
    }
    total += item.price;
    renderCart();
  }
};

// REMOVE PRODUCT
window.removeProduct = (id) => {
  if (cartItems[id]) {
    total -= cartItems[id].price;
    cartItems[id].qty--;
    if (cartItems[id].qty <= 0) {
      delete cartItems[id];
    }
    renderCart();
  }
};

// RENDER CART
function renderCart() {
  let keys = Object.keys(cartItems);
  if (keys.length === 0) {
    cartContainer.innerHTML = "<p>Cart is Empty</p>";
  } else {
    cartContainer.innerHTML = keys.map((key) => {
      let item = cartItems[key];
      return `
        <div class="cart-item">
          <img src="${item.img}" height="50px" width="50px">
          <span>${item.desc} × ${item.qty} = ₹${item.price * item.qty}</span>
        </div>
      `;
    }).join("");
  }
  totalBox.innerText = "TOTAL : ₹" + total;
}
