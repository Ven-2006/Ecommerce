/* ==========================================================================
   CART STORAGE
   The cart is an array of { id, qty } saved in localStorage so it
   survives navigation between pages. All price/subtotal math is derived
   from PRODUCTS (products-data.js) at read time, never stored directly.
   ========================================================================== */

const CART_KEY = "dp_cart";
const SHIPPING_FEE = 60; // flat rate shipping fee in PHP, applied whenever the cart isn't empty

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty) {
  qty = Math.max(1, parseInt(qty, 10) || 1);
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
}

function setCartQty(productId, qty) {
  qty = parseInt(qty, 10) || 0;
  let cart = getCart();
  if (qty <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  } else {
    const existing = cart.find((item) => item.id === productId);
    if (existing) existing.qty = qty;
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

/* Cart lines joined with full product info, skipping any id no longer in the catalog */
function getCartDetails() {
  return getCart()
    .map((item) => {
      const product = findProductById(item.id);
      if (!product) return null;
      return {
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty: item.qty,
        subtotal: product.price * item.qty
      };
    })
    .filter(Boolean);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function getCartSubtotal() {
  return getCartDetails().reduce((sum, line) => sum + line.subtotal, 0);
}

function getShippingFee() {
  return getCartSubtotal() > 0 ? SHIPPING_FEE : 0;
}

function getCartTotal() {
  return getCartSubtotal() + getShippingFee();
}

/* Updates every element with [data-cart-count] on the current page (header icon badge) */
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
