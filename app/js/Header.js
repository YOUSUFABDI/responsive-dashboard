const mobileHumbeger = document.querySelector(".mobile");
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

function handleMobileHumbeger() {
  if (sidebar.classList.contains("hide-sidebar")) {
    sidebar.classList.remove("hide-sidebar");

    overlay.classList.add("open-overlay");

    body.classList.add("no-scroll");
  } else {
    sidebar.classList.add("hide-sidebar");

    overlay.classList.remove("open-overlay");
  }
  // sidebar.style.display = "block";
  // // sidebarHead.style.display = "block";
  // overlay.style.display = "block";
  header.style.background = "#737373";
  heroCard.forEach((hero) => {
    hero.style.background = "#737373";
  });
  // body.classList.toggle("no-scroll");
  body.style.background = "#737373";
  chart.style.background = "#737373";
  chartHead.style.background = "#737373";
  chartHeadBtn.style.background = "#737373";
  overViewBox.forEach((box) => {
    box.style.background = "#737373";
  });
  overViewChartWrap.style.background = "#737373";
  overViewHead.style.background = "#737373";
  // console.log("helo");
}

function handleOverlay() {
  sidebar.classList.add("hide-sidebar");

  overlay.classList.remove("open-overlay");

  body.classList.remove("no-scroll");
  body.style.background = "";
  // body.classList.remove("no-scroll");
  // sidebar.style.display = "none";
  // overlay.style.display = "none";
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
  if (sidebar.classList.contains("hide")) {
    sidebarHead.classList.remove("hide__sidebar__head");
    sidebar.classList.remove("hide");

    header.classList.remove("toggle-head");

    hero.classList.remove("add");

    chartHead.classList.remove("remove-m-l");
    chartTable.classList.remove("m-l-c");

    overViewSection.classList.remove("r-o-m-l");

    footer.classList.remove("remove_fotter_m");

    overlay.classList.remove("fr-d");
  } else {
    sidebar.classList.add("hide");
    sidebarHead.classList.add("hide__sidebar__head");

    header.classList.add("toggle-head");

    hero.classList.add("add");

    chartHead.classList.add("remove-m-l");
    chartTable.classList.add("m-l-c");

    overViewSection.classList.add("r-o-m-l");

    footer.classList.add("remove_fotter_m");

    overlay.classList.add("fr-d");
  }
}

mobileHumbeger.addEventListener("click", handleMobileHumbeger);
desktopHumbeger.addEventListener("click", handleDesktopHumbeger);
overlay.addEventListener("click", handleOverlay);
