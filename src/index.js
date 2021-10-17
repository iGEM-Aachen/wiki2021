import "./css/index.scss";
import "./js/main";

// Fancy fade animation

var fadeElements = document.getElementsByClassName("fade");

function fadeOutOnScroll(element, offset) {
    if (!element) {
        return;
    }

    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.getElementById('scrollable').scrollTop;

    var opacity = window.getComputedStyle(element).getPropertyValue("opacity");

    if (scrollTop > (distanceToTop - offset) && opacity == 1) {
        element.style.opacity = 0;
    }

    if (scrollTop <= (distanceToTop - offset) && opacity == 0) {
        element.style.opacity = 1;
    }
}

function scrollHandler() {
    for (var i = 0; i < fadeElements.length; i++) {
        fadeOutOnScroll(fadeElements[i], 540);
    }
}

window.addEventListener('scroll', scrollHandler);

// Scrolling rocket
var rocket_offset = 500;
var rocket_max_margin = 700;

$('#rocket-container').css({
    'height': rocket_max_margin + 100
})

function scrollRocket() {
    var rocket_container = document.getElementById('rocket-container');
    var distanceToTop = window.pageYOffset + rocket_container.getBoundingClientRect().top;
    var scrollTop = document.getElementById('scrollable').scrollTop;

    var rocket_top = -scrollTop + distanceToTop + rocket_offset;

    console.log("scrollTop: " + scrollTop);
    console.log("distanceToTop: " + distanceToTop);
    console.log("rocket_offset: " + rocket_offset);
    console.log("top: " + rocket_top);

    if (rocket_top >= 0 && rocket_top < rocket_max_margin) {
        $('#rocket').css({
            'margin-top': rocket_top
        });
    } else if (rocket_top > rocket_max_margin) {
        $('#rocket').css({
            'margin-top': rocket_max_margin
        });
    } else {
        $('#rocket').css({
            'margin-top': 0
        });
    }
};

window.addEventListener('scroll', scrollRocket);