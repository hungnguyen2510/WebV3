$(document).ready(function () {
    $(".location__item").click(function () {
      $(".location__list")
        .children()
        .toArray()
        .forEach((element) => {
          if (element.className.includes("active-location-item")) {
            element.classList.remove("active-location-item");
            $(this).addClass("active-location-item");
          }
        });
    });
    
    $("#location__region-1").click(function () {
      $(".location-detail__items")
        .toArray()
        .forEach((e) => {
          if (e.className.includes("active")) {
            e.classList.remove("active");
          } else {
            if (e.id.includes("location-detail__content1")) {
              e.classList.add("active");
            }
          }
        });
    });

    $("#location__region-2").click(function () {
      $(".location-detail__items")
        .toArray()
        .forEach((e) => {
          if (e.className.includes("active")) {
            e.classList.remove("active");
          } else {
            if (e.id.includes("location-detail__content2")) {
              e.classList.add("active");
            }
          }
        });
    });

    $("#location__region-3").click(function () {
      $(".location-detail__items")
        .toArray()
        .forEach((e) => {
          if (e.className.includes("active")) {
            e.classList.remove("active");
          } else {
            // console.log(e.classList)
            if (e.id.includes("location-detail__content3")) {
              e.classList.add("active");
            }
          }
        });
    });

    $(".row-location-details__item").click(function (){
      $(".row-location-details .row-location-details__item > h2").addClass("grey")

      if($(this).hasClass("active")){
        $(this).removeClass("active")
        $(".row-location-details .row-location-details__item > h2").removeClass("grey")
        $(".row-location-details .row-location-details__item").addClass("pb-0")
      }
      else{
        $(this).addClass("active")
        $("h2",this).removeClass("grey")
        $(".row-location-details .row-location-details__item.active").removeClass("pb-0")
        function RelativeHeight(){
          divHeight = $('.row-location-details__item.active .location-details__item-hide').height()
          $(".row-location-details .row-location-details__item.active").css({'padding-bottom' : divHeight})
        }
        RelativeHeight();
      }
    });
});

var overlayElement = document.getElementById("overlay-element");
var navSliderElement = document.getElementById("nav-slider-element");
// console.log(allItem);
function ToggleNav() {
  overlayElement.classList.add("nav-active");
  navSliderElement.classList.add("nav-active");
} 
function CloseNav() {
  overlayElement.classList.remove("nav-active");
  navSliderElement.classList.remove("nav-active");
}
