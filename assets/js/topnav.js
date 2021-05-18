var overlayElement = document.getElementById("overlay-element");
var navSliderElement = document.getElementById("nav-slider-element");
function ToggleNav() {
  overlayElement.classList.add("nav-active");
  navSliderElement.classList.add("nav-active");
  // navSliderElement.style.width = "48.7%"
}
function CloseNav() {
  overlayElement.classList.remove("nav-active");
  navSliderElement.classList.remove("nav-active");
}
