const sidebarToggle = document.querySelector(".milk-pick-product-toggle");
const sidebar = document.querySelector(".milk-pick-product-left");
const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navItems = document.querySelector(".nav-items");
const navItemsClose = document.querySelector(".nav-item--close");
const filterCloseBtn = document.querySelector(".filter-close-btn");
const milkTypeBox = document.querySelectorAll(".filter-box");
const filterheader = document.querySelectorAll(".filter-box-header");
const filterContent = document.querySelectorAll(".filter-box-content");

if (hamburger && navItemsClose) {
  hamburger.addEventListener("click", () => navItems.classList.toggle("active"));
  navItemsClose.addEventListener("click", () => navItems.classList.toggle("active"));
}

if (sidebarToggle && filterCloseBtn) {
  sidebarToggle.addEventListener("click", () => sidebar.classList.toggle("active"));
  filterCloseBtn.addEventListener("click", () => sidebar.classList.remove("active"));
}

document.addEventListener("click", (event) => {
  if (sidebar && !sidebar.contains(event.target) && event.target !== sidebarToggle) {
    sidebar.classList.remove("active");
  }
  if (!navItems.contains(event.target) && event.target !== hamburgerIcon) {
    navItems.classList.remove("active");
  }
});

filterContent.forEach((content) => {
  content.classList.add("hidden");
});

filterheader.forEach((filter) => {
  filter.addEventListener("click", () => {
    console.log(filter.childNodes);
    if (filter.childNodes[3].src.endsWith("icon-plus.png")) {
      filter.childNodes[3].src = "./images/icon-minus.png";
    } else {
      filter.childNodes[3].src = "./images/icon-plus.png";
    }
    filter.childNodes[3].classList.toggle("rotate");
    filter.nextElementSibling.classList.toggle("hidden");
  });
});
