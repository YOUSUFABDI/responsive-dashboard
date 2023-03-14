const humbgerMenu = document.querySelector(".humberg-menu");
const desktopHumbeger = document.querySelector(".desktop");
const sidebar = document.querySelector(".sidebar__wrapper");
const sidebarHead = document.querySelector(".sidebar__head");
const header = document.querySelector(".header__section");

const hero = document.querySelector(".hero");
const heroCard = document.querySelectorAll(".hero__card");

const overViewSection = document.querySelector(".overview__section");
const overViewBox = document.querySelectorAll(".overview__box");
const overViewChartWrap = document.querySelector(".overview__statistics");
const overViewHead = document.querySelector(".overview__statistics__head");

const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

const footer = document.querySelector(".footer__section");

const chart = document.querySelector(".chart");
const chartHead = document.querySelector(".crt__head");
const chartHeadBtn = document.querySelector(".crt__head button");
const chartTable = document.querySelector(".chart");

const dropDownButtons = document.querySelectorAll(".drop__btn");
const dropDownwrappers = document.querySelectorAll(".dropdown__items");
const arrowIcon = document.querySelectorAll(".arrow");

// window.location.reload();

function ToggleSideBar() {
  sidebar.style.display = "block";
  // sidebarHead.style.display = "block";
  overlay.style.display = "block";
  header.style.background = "#737373";

  heroCard.forEach((hero) => {
    hero.style.background = "#737373";
  });

  body.classList.toggle("no-scroll");

  body.style.background = "#737373";

  chart.style.background = "#737373";

  chartHead.style.background = "#737373";
  chartHeadBtn.style.background = "#737373";

  overViewBox.forEach((box) => {
    box.style.background = "#737373";
  });
  overViewChartWrap.style.background = "#737373";
  overViewHead.style.background = "#737373";

  console.log("helo");
}

function handleOverlay() {
  body.style.background = "";
  body.classList.remove("no-scroll");

  sidebar.style.display = "none";
  overlay.style.display = "none";
  header.style.background = "";

  heroCard.forEach((hero) => {
    hero.style.background = "";
  });

  chart.style.background = "";
  chartHead.style.background = "";
  chartHeadBtn.style.background = "";

  overViewBox.forEach((box) => {
    box.style.background = "";
  });
  overViewChartWrap.style.background = "";
  overViewHead.style.background = "";
}

// desktop humbeger menu btn
function handleDesktopHumbeger() {
  sidebar.classList.toggle("hide");
  sidebarHead.classList.toggle("hide__sidebar__head");

  hero.classList.toggle("add");

  header.classList.toggle("toggle-head");

  chartHead.classList.toggle("remove-m-l");
  chartTable.classList.toggle("m-l-c");

  overViewSection.classList.toggle("r-o-m-l");

  footer.classList.toggle("remove_fotter_m");

  console.log("d");
}

//Charts
//One
let xValues = ["Website", "App", "Linux", "Window"];
let yValues = [55, 49, 44, 24, 15];
let barColors = ["red", "green", "blue", "orange", "brown"];

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
      // text: "World Wine Production 2018",
    },
  },
});

//Doughnut Charts
//Two
let xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues2 = [55, 49, 44, 24, 15];
let barColors2 = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues2,
    datasets: [
      {
        backgroundColor: barColors2,
        data: yValues2,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018",
    },
  },
});

//Three
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

new Chart("myChart3", {
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

//Four
var xValues4 = [];
var yValues4 = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues4,
    datasets: [
      {
        fill: false,
        pointRadius: 2,
        borderColor: "rgba(0,0,255,0.5)",
        data: yValues4,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: "y = sin(x)",
      fontSize: 16,
    },
  },
});
function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues4.push(eval(value));
    xValues4.push(x);
  }
}

humbgerMenu.addEventListener("click", ToggleSideBar);

desktopHumbeger.addEventListener("click", handleDesktopHumbeger);

overlay.addEventListener("click", handleOverlay);

// dropdown
dropDownButtons.forEach(function (i, index) {
  i.addEventListener("click", function () {
    dropDownwrappers[index].classList.toggle("open-dropdown");
    arrowIcon[index].classList.toggle("arrow__icon");
    console.log(dropDownwrappers[index]);
    console.log(i);
  });
});
