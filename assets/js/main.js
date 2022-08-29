// add hovered class to selected list item
let list = document.querySelectorAll(".navigation2 li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle2");
let navigation = document.querySelector(".navigation2");
let main = document.querySelector(".main2");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
