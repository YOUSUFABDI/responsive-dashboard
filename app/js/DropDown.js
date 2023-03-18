const dropDownButtons = document.querySelectorAll(".drop__btn");
const dropDownwrappers = document.querySelectorAll(".dropdown__items");
const arrowIcon = document.querySelectorAll(".arrow");

// dropdown
dropDownButtons.forEach(function (i, index) {
  i.addEventListener("click", function () {
    dropDownwrappers[index].classList.toggle("open-dropdown");
    arrowIcon[index].classList.toggle("arrow__icon");
    console.log(dropDownwrappers[index]);
    console.log(i);
  });
});
