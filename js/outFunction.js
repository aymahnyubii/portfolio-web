window.transitionToPage = function (href) {
  document.querySelector("header").style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector("header").style.opacity = 1;
});
