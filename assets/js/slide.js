"use strict";

var SlideIndex = 1;


function showSlide(n) {
    var i,
     slides = document.getElementsByClassName("Slides"),
     dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { SlideIndex = 1; }
    if (n < 1) {SlideIndex = slides.length; }
    
    for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[SlideIndex - 1].style.display = "block";
    dots[SlideIndex - 1].className += " active";
}

showSlide(SlideIndex);

function plusSlide(n) {
    showSlide(SlideIndex += n);
}

function currentSlide(n) {
    showSlide(SlideIndex = n);
}









