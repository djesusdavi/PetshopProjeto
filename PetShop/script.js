let cart = [];

const modal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutForm = document.getElementById('checkout-form');
const checkoutProdutos = document.getElementById('checkout-produtos');
const checkoutTotal = document.getElementById('checkout-total');

// Abrir modal
document.getElementById('cart-icon').addEventListener('click', () => {
  modal.style.display = 'flex';
  updateCart();
});

// Fechar modal
document.querySelector('.close-cart').addEventListener('click', () => {
  modal.style.display = 'none';
});

// Adicionar produto
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseFloat(btn.dataset.price);
    const item = cart.find(i => i.name === name);

    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });

    updateCart();
    alert(`${name} adicionado ao carrinho!`);
  });
});

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.name} x ${item.qty} - R$ ${(item.price * item.qty).toFixed(2)}</p>
        <button onclick="removeItem('${item.name}')">Remover</button>
      </div>
    `;
  });
  cartCount.textContent = cart.reduce((a,b) => a + b.qty, 0);
  cartTotal.textContent = total.toFixed(2);

  // Atualiza o formulário do checkout
  checkoutProdutos.value = cart.map(i => `${i.name} (x${i.qty})`).join(', ');
  checkoutTotal.value = total.toFixed(2);
}

function removeItem(name) {
  cart = cart.filter(i => i.name !== name);
  updateCart();
}
