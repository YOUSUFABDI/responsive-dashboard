const searchButton = document.querySelector("[data-search-btn]");
const navbar = document.querySelector("[data-navbar]");
const inputWrapper = document.querySelector("[data-input-wrapper]");
const closeInputButton = document.querySelector("[data-close-btn]");
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu]");
const overlay = document.querySelector("[data-overlay]");
const sidebar = document.querySelector("[data-sidebar]");
const overview = document.querySelector("[data-overview]");
const body = document.querySelector("body");
const dropDownButtons = document.querySelectorAll("[data-dropdown-wrapper]");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownIcon = document.querySelectorAll("[data-dropdown-icon]");
const pageLinkdropdownLists = document.querySelectorAll(".dropdown-itm");
const pageLinkAnchors = document.querySelectorAll(".dash-link");

let responsiveBreakpoint = 991;

handleResponsive();

const openSearchInput = () => {
  navbar.classList.add("hide");
  inputWrapper.classList.remove("hide");
};

const closeSearchInput = (event) => {
  event.preventDefault();
  inputWrapper.classList.add("hide");
  navbar.classList.remove("hide");
};

function handleResponsive() {
  if (window.innerWidth <= 1024) {
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = 0;
  }

  if (window.innerWidth >= responsiveBreakpoint) {
    header.classList.add("addMr");
    sidebar.classList.add("open-sidebar");
    overlay.classList.add("hide-overlay");

    sidebar.style.visibility = "visible";
    sidebar.style.opacity = 1;

    // Overview
    overview.classList.add("addMr");
  }
}

const handleScreenResize = () => {
  if (window.innerWidth <= 1024) {
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = 0;
  }

  if (window.innerWidth >= responsiveBreakpoint) {
    header.classList.add("addMr");
    sidebar.classList.add("open-sidebar");
    overlay.classList.add("hide-overlay");

    sidebar.style.visibility = "visible";
    sidebar.style.opacity = 1;

    // Overview
    overview.classList.add("addMr");
  }
};

const handleMenuBtn = () => {
  if (sidebar.classList.contains("open-sidebar")) {
    sidebar.classList.remove("open-sidebar");
    sidebar.style.visibility = "hidden";
    sidebar.style.opacity = 0;

    header.classList.remove("addMr");

    // Overview
    overview.classList.remove("addMr");
  } else {
    sidebar.classList.add("open-sidebar");
    sidebar.style.visibility = "visible";
    sidebar.style.opacity = 1;

    header.classList.add("addMr");

    // Overview
    overview.classList.add("addMr");
  }

  if (window.innerWidth <= 1024) {
    if (sidebar.classList.contains("open-sidebar")) {
      sidebar.classList.remove("open-sidebar");
    } else {
      sidebar.classList.add("open-sidebar");
    }

    sidebar.style.visibility = "visible";
    sidebar.style.opacity = 1;

    header.classList.remove("addMr");

    overlay.classList.add("open-overlay");
  }

  // Stoping scrolling
  body.classList.add("no-scroll");
};

const hideOverlay = () => {
  overlay.classList.remove("open-overlay");

  sidebar.style.visibility = "hidden";
  sidebar.style.opacity = 0;

  // Stoping scrolling
  body.classList.remove("no-scroll");
};

const openDropdown = (index) => {
  dropdownItems[index].classList.toggle("open");

  if (dropdownIcon[index].classList.contains("rotate")) {
    dropdownIcon[index].classList.remove("rotate");
  } else {
    dropdownIcon[index].classList.add("rotate");
  }
};

function handlePageLinkList() {
  const activeButton = document.querySelector(".active");

  if (activeButton.classList.contains("active")) {
    activeButton.classList.remove("active");
  } else {
    activeButton.classList.add("active");
  }

  this.classList.add("active");
}

function handlePageLinkAnchors() {
  const activeButton = document.querySelector(".dash-active");

  activeButton.classList.remove("dash-active");

  this.classList.add("dash-active");
}

searchButton.addEventListener("click", openSearchInput);
closeInputButton.addEventListener("click", closeSearchInput);
window.addEventListener("resize", handleScreenResize);
menuButton.addEventListener("click", handleMenuBtn);
overlay.addEventListener("click", hideOverlay);
dropDownButtons.forEach((dropdown, index) => {
  dropdown.addEventListener("click", (e) => {
    openDropdown(index);
  });
});
pageLinkdropdownLists.forEach((button) => {
  button.addEventListener("click", handlePageLinkList);
});
pageLinkAnchors.forEach((button) => {
  button.addEventListener("click", handlePageLinkAnchors);
});
