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

// Chart One
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"];
var yValues = [55, 49, 44, 24, 30, 45];
var barColors = [
  "#35324e",
  "hsl(210, 79%, 46%)",
  "hsl(36, 100%, 69%)",
  "#FF6378",
  "#115293",
  "#35324e",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "Production",
    },
  },
});

//Chart Two
var xValues = ["Jan", "Feb", "Mar", "Apr"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#115293", "#4791DB", "#FEBE5F", "#e8c3b9"];

new Chart("myChartTwo", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "STATISTICS",
    },
  },
});

//Chart Three
var xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
var yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("myChartThree", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

//Chart Four
var xyValues = [
  { x: 50, y: 7 },
  { x: 60, y: 8 },
  { x: 70, y: 8 },
  { x: 80, y: 9 },
  { x: 90, y: 9 },
  { x: 100, y: 9 },
  { x: 110, y: 10 },
  { x: 120, y: 11 },
  { x: 130, y: 14 },
  { x: 140, y: 14 },
  { x: 150, y: 15 },
];

new Chart("myChartFour", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{ ticks: { min: 40, max: 160 } }],
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});

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
