let currentSlide = 0;
const listSlides = document.getElementsByClassName("mySlides");

setInterval(function () {
  if (currentSlide == listSlides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  for (let i = 0; i < listSlides.length; i++) {
    if (currentSlide == i) {
      listSlides[i].style.display = "block";
    } else {
      listSlides[i].style.display = "none";
    }
  }
}, 2000);
