/* ==========================================================================
   SITE-WIDE UI BEHAVIOR
   Mobile navigation toggle + a small toast helper reused by the
   product detail and cart pages ("Added to cart" style messages).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("is-open"));
    });
  }
});

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}
