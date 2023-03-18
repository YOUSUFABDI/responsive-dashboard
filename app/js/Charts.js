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

// Five
