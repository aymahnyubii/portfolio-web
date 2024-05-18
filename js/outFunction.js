window.transitionToPage = function (href) {
  document.querySelector("header").style.backgroundColor = "black";
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("header").style.backgroundColor = "white";
});
