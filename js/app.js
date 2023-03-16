const sidebarToggle = document.querySelector(".milk-pick-product-toggle");
const sidebar = document.querySelector(".milk-pick-product-left");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navItems = document.querySelector(".nav-items");
const navItemsClose = document.querySelector(".nav-item--close");
const filterCloseBtn = document.querySelector(".filter-close-btn");
console.log(filterCloseBtn);

sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("active"));
filterCloseBtn.addEventListener("click", () => sidebar.classList.remove("active"));
hamburger.addEventListener("click", () => navItems.classList.toggle("active"));
navItemsClose.addEventListener("click", () => navItems.classList.toggle("active"));

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
    sidebar.classList.remove("active");
  }
  if (!navItems.contains(event.target) && event.target !== hamburgerIcon) {
    navItems.classList.remove("active");
  }
});
