const comWindow = document.querySelector(".com-screen");
comWindow.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", comWindow.scrollY > 0);
});

function toggleSidebar() {
  var sideBar = document.getElementById("sideBar");
  sideBar.classList.toggle("show");
}
window.transitionToPage = function (href) {
  document.querySelector("header").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("header").style.opacity = 1;
});
