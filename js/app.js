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
const ingredientsBtns = document.querySelectorAll(".willas-original-product-ingredients-btn");
const ingredientsContent = document.querySelector(".ingredients-content");
const nutritionFactsBox = document.querySelector(".nutrition-facts-box");
const nutritionFactsBtn = document.querySelector(".nutrition-facts-btn");
const ingredientsIcon = document.querySelector(".ingredients-icon");
const swiperSlider = document.querySelector(".swiper");

// Navbar
if (hamburger && navItemsClose) {
  hamburger.addEventListener("click", () => navItems.classList.toggle("active"));
  navItemsClose.addEventListener("click", () => navItems.classList.toggle("active"));
}

// Sidebar
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

// Filters
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

// Ingredients
if (ingredientsBtns && ingredientsContent && ingredientsIcon) {
  if (ingredientsBtns.length) {
    ingredientsBtns.forEach(function (ingredientsBtn) {
      const ingredientsContent = ingredientsBtn.nextElementSibling;
      const ingredientsIcon = ingredientsBtn.querySelector(".ingredients-icon");
      ingredientsBtn.addEventListener("click", function () {
        ingredientsContent.classList.toggle("ingredients-content-show");
        if (ingredientsContent.classList.contains("ingredients-content-show")) {
          ingredientsIcon.src = "images/icon-minus.png";
        } else {
          ingredientsIcon.src = "images/icon-plus.png";
        }
      });
    });
  }
}

// Nutrition Facts
if (nutritionFactsBtn) {
  nutritionFactsBtn.addEventListener("click", function () {
    nutritionFactsBox.classList.toggle("nutrition-facts-box-show");
  });
}

// // Slider Component
if (swiperSlider) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    keyboard: true,
    loop: true,
  });
}
