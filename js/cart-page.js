/* ==========================================================================
   CART PAGE
   Renders cart lines from getCartDetails() and recalculates the
   subtotal / shipping / total (the actual price calculation) live
   whenever a quantity changes or a line is removed.
   ========================================================================== */

(function () {
  const withItemsEl = document.getElementById("cartWithItems");
  const emptyEl = document.getElementById("cartEmpty");
  const tbody = document.getElementById("cartTableBody");

  function render() {
    const lines = getCartDetails();

    if (lines.length === 0) {
      withItemsEl.hidden = true;
      emptyEl.hidden = false;
      return;
    }
    withItemsEl.hidden = false;
    emptyEl.hidden = true;

    tbody.innerHTML = lines
      .map((line) => `
        <tr data-id="${line.id}">
          <td>
            <div class="cart-product">
              <img src="${line.image}" alt="${line.name}">
              <span>${line.name}</span>
            </div>
          </td>
          <td>${formatPeso(line.price)}</td>
          <td class="cart-qty">
            <div class="qty-control">
              <button type="button" data-decrease="${line.id}" aria-label="Decrease quantity">−</button>
              <input type="number" min="1" value="${line.qty}" data-qty-input="${line.id}" inputmode="numeric">
              <button type="button" data-increase="${line.id}" aria-label="Increase quantity">+</button>
            </div>
          </td>
          <td class="cart-subtotal-cell">${formatPeso(line.subtotal)}</td>
          <td class="cart-remove-cell">
            <button type="button" class="cart-remove" data-remove="${line.id}" aria-label="Remove ${line.name}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
            </button>
          </td>
        </tr>
      `)
      .join("");

    renderSummary();
    wireRowEvents();
  }

  function renderSummary() {
    document.getElementById("sumSubtotal").textContent = formatPeso(getCartSubtotal());
    document.getElementById("sumShipping").textContent = formatPeso(getShippingFee());
    document.getElementById("sumTotal").textContent = formatPeso(getCartTotal());
  }

  function wireRowEvents() {
    tbody.querySelectorAll("[data-remove]").forEach((btn) => {
      btn.addEventListener("click", () => {
        removeFromCart(btn.dataset.remove);
        render();
      });
    });
    tbody.querySelectorAll("[data-increase]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.increase;
        const input = tbody.querySelector(`[data-qty-input="${id}"]`);
        const newQty = (parseInt(input.value, 10) || 1) + 1;
        setCartQty(id, newQty);
        render();
      });
    });
    tbody.querySelectorAll("[data-decrease]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.decrease;
        const input = tbody.querySelector(`[data-qty-input="${id}"]`);
        const newQty = (parseInt(input.value, 10) || 1) - 1;
        setCartQty(id, newQty);
        render();
      });
    });
    tbody.querySelectorAll("[data-qty-input]").forEach((input) => {
      input.addEventListener("change", () => {
        setCartQty(input.dataset.qtyInput, input.value);
        render();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();
