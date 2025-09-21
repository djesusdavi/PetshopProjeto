// Lista de produtos (simulação dropshipping)
const products = [
  { id: 1, name: "Ração Premium", price: 89.90, img: "https://placehold.co/300x200" },
  { id: 2, name: "Brinquedo Interativo", price: 49.90, img: "https://placehold.co/300x200" },
  { id: 3, name: "Cama Conforto", price: 129.90, img: "https://placehold.co/300x200" },
  { id: 4, name: "Coleira Estilosa", price: 39.90, img: "https://placehold.co/300x200" },
];

// Renderizar produtos
const productList = document.getElementById("product-list");
products.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <span class="price">R$ ${p.price.toFixed(2)}</span>
    <button class="btn" onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
  `;
  productList.appendChild(div);
});

// Carrinho
let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").textContent = cart.length;
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}

// Modal do carrinho
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", () => {
  cartModal.style.display = "flex";
});
closeCart.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Checkout
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada com sucesso! 🚀");
  cart = [];
  updateCart();
  cartModal.style.display = "none";
});
