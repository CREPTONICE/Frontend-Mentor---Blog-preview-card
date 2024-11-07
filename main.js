const toggle = document.getElementById("switch");
const toggled = document.getElementById("switched");
const box = document.getElementById("box");

toggle.addEventListener("click", function () {
  // Apply the changes immediately
  box.style.backgroundColor = "#000";
  box.classList.add("switch");
  toggle.style.display = "none";
  toggled.style.display = "block";
});

toggled.addEventListener("click", function () {
  box.style.backgroundColor = ""; // Reverts to original color
  box.classList.remove("switch");
  toggle.style.display = "block";
  toggled.style.display = "";
});
