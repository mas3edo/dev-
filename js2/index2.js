let btn = document.getElementById("up");
let body = document.body;
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});
