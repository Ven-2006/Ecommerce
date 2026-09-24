/* ==========================================================================
   PRODUCTS PAGE
   Left sidebar lists categories (from CATEGORY_LABELS); selecting one
   filters PRODUCTS. Results are paginated 6-per-page, matching the
   "All Products - Slide 1/2/3/4" pattern from the wireframe, with a
   prev/next + dot pagination control at the bottom of the grid.
   The active category and page are both kept in the URL hash, e.g.
   products.html#tart or products.html#all-2 (page 2 of All Products).
   ========================================================================== */

(function () {
  const PAGE_SIZE = 6;
  const categoryList = document.getElementById("categoryList");
  const productGrid = document.getElementById("productGrid");
  const resultsMeta = document.getElementById("resultsMeta");
  const emptyState = document.getElementById("emptyState");
  const paginationEl = document.getElementById("pagination");

  function parseHash() {
    const raw = window.location.hash.replace("#", "");
    const [cat, pageStr] = raw.split("-");
    const category = CATEGORY_LABELS[cat] ? cat : "all";
    const page = Math.max(1, parseInt(pageStr, 10) || 1);
    return { category, page };
  }

  function setHash(category, page) {
    const catPart = category === "all" ? "all" : category;
    window.location.hash = page > 1 ? `${catPart}-${page}` : (category === "all" ? "" : catPart);
  }

  function renderSidebar() {
    const { category } = parseHash();
    categoryList.innerHTML = Object.keys(CATEGORY_LABELS)
      .map((key) => `
        <button type="button" data-category="${key}" class="${key === category ? "active" : ""}">
          ${CATEGORY_LABELS[key]}
        </button>
      `)
      .join("");

    categoryList.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => setHash(btn.dataset.category, 1));
    });
  }

  function renderProducts() {
    const { category, page } = parseHash();
    const filtered = category === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    resultsMeta.textContent = `${filtered.length} pastr${filtered.length === 1 ? "y" : "ies"} in ${CATEGORY_LABELS[category]}`;
    emptyState.hidden = filtered.length !== 0;

    productGrid.innerHTML = pageItems
      .map((p) => `
        <article class="product-card">
          <div class="product-card__figure">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
          </div>
          <div class="product-card__body">
            <h3>${p.name}</h3>
            <span class="product-card__price">${formatPeso(p.price)}</span>
            <a href="product-detail.html?id=${p.id}" class="btn btn-primary">View</a>
          </div>
        </article>
      `)
      .join("");

    renderPagination(category, currentPage, totalPages);
  }

  function renderPagination(category, currentPage, totalPages) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
      return;
    }
    let dots = "";
    for (let i = 1; i <= totalPages; i++) {
      dots += `<button type="button" class="dot ${i === currentPage ? "active" : ""}" data-page="${i}" aria-label="Page ${i}"></button>`;
    }
    paginationEl.innerHTML = `
      <button type="button" data-page="${currentPage - 1}" ${currentPage === 1 ? "disabled" : ""} aria-label="Previous page">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      ${dots}
      <button type="button" data-page="${currentPage + 1}" ${currentPage === totalPages ? "disabled" : ""} aria-label="Next page">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    `;
    paginationEl.querySelectorAll("[data-page]").forEach((btn) => {
      btn.addEventListener("click", () => setHash(category, parseInt(btn.dataset.page, 10)));
    });
  }

  function render() {
    renderSidebar();
    renderProducts();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  window.addEventListener("hashchange", render);
  document.addEventListener("DOMContentLoaded", render);
})();
