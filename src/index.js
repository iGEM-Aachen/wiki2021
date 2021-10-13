import "./css/index.scss";
import "./js/main";

var fadeElements = document.getElementsByClassName("fade");


function fadeOutOnScroll(element, offset) {
    if (!element) {
        return;
    }

    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.getElementById('scrollable').scrollTop;

    var opacity = window.getComputedStyle(element).getPropertyValue("opacity");

    console.log(element.opacity)
    if (scrollTop > (distanceToTop - offset) && opacity == 1) {
        element.style.opacity = 0;
        console.log("make " + element.id + " invisible");
    }

    if (scrollTop <= (distanceToTop - offset) && opacity == 0) {
        element.style.opacity = 1;
        console.log("make " + element.id + " visible");
    }
}

function scrollHandler() {
    for (var i = 0; i < fadeElements.length; i++) {
        fadeOutOnScroll(fadeElements[i], 540);
    }
}

window.addEventListener('scroll', scrollHandler);