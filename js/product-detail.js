/* ==========================================================================
   PRODUCT DETAIL PAGE
   Reads the ?id= query param, finds the matching product in PRODUCTS,
   and fills the page. Also wires the quantity stepper and Add to Cart.
   ========================================================================== */

(function () {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = findProductById(productId);
  const productSection = document.getElementById("productSection");

  if (!product) {
    productSection.innerHTML = `
      <div class="container">
        <div class="empty-state">
          <h2>We couldn't find that pastry</h2>
          <p>It may have been removed from the menu.</p>
          <a href="products.html" class="btn btn-primary">Back to Products</a>
        </div>
      </div>`;
    return;
  }

  document.title = product.name + " — Emybakeditph";
  document.getElementById("breadcrumbName").textContent = product.name;
  document.getElementById("pdImage").src = product.image;
  document.getElementById("pdImage").alt = product.name;
  document.getElementById("pdName").textContent = product.name;
  document.getElementById("pdPrice").textContent = formatPeso(product.price);
  document.getElementById("pdDesc").textContent = product.description;

  const qtyInput = document.getElementById("qtyInput");
  document.getElementById("qtyMinus").addEventListener("click", () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
  });
  qtyInput.addEventListener("change", () => {
    if (!qtyInput.value || parseInt(qtyInput.value, 10) < 1) qtyInput.value = 1;
  });

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    addToCart(product.id, qtyInput.value);
    showToast(product.name + " added to cart");
  });
})();
