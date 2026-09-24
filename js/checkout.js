/* ==========================================================================
   CHECKOUT PAGE
   Renders the order summary (line items + subtotal/shipping/total)
   from the cart, then on form submit "places" the order: validates
   the form, clears the cart, and shows a confirmation panel.
   ========================================================================== */

(function () {
  const withItemsEl = document.getElementById("checkoutWithItems");
  const emptyEl = document.getElementById("checkoutEmpty");
  const confirmEl = document.getElementById("orderConfirm");
  const form = document.getElementById("checkoutForm");

  function renderSummary() {
    const lines = getCartDetails();

    if (lines.length === 0) {
      withItemsEl.hidden = true;
      emptyEl.hidden = false;
      confirmEl.hidden = true;
      return;
    }
    withItemsEl.hidden = false;
    emptyEl.hidden = true;

    document.getElementById("summaryLineItems").innerHTML = lines
      .map((line) => `
        <div class="summary-line-item">
          <span>${line.name} × ${line.qty}</span>
          <span>${formatPeso(line.subtotal)}</span>
        </div>
      `)
      .join("");

    document.getElementById("coSubtotal").textContent = formatPeso(getCartSubtotal());
    document.getElementById("coShipping").textContent = formatPeso(getShippingFee());
    document.getElementById("coTotal").textContent = formatPeso(getCartTotal());
  }

  function generateOrderId() {
    const now = new Date();
    const stamp = now.getFullYear().toString().slice(-2) +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return "DP-" + stamp + "-" + rand;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const orderId = generateOrderId();
    document.getElementById("orderIdDisplay").textContent = orderId;

    clearCart();
    withItemsEl.hidden = true;
    confirmEl.hidden = false;
  });

  document.addEventListener("DOMContentLoaded", renderSummary);
})();
