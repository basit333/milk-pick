const sidebarToggle = document.querySelector("#nav-toggle");
const sidebar = document.querySelector(".milk-pick-product-left");
const hamburger = document.querySelector(".hamburger");
const hamburgerOpenImg = document.querySelector(".hamburger-open-img");
console.log(hamburgerOpenImg);
const hamburgerCloseImg = document.querySelector(".hamburger-close-img");
console.log(hamburgerCloseImg);
const navItems = document.querySelector(".nav-items");
const navItemsClose = document.querySelector(".nav-item--close");

sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("active"));
hamburger.addEventListener("click", () => navItems.classList.toggle("active"));
hamburgerOpenImg.addEventListener("click", () => navItems.classList.add("active"));
hamburgerCloseImg.addEventListener("click", () => navItems.classList.remove("active"));
navItemsClose.addEventListener("click", () => navItems.classList.toggle("active"));

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
    sidebar.classList.remove("active");
  }
  if (!navItems.contains(event.target) && event.target !== hamburger) {
    navItems.classList.remove("active");
  }
});
