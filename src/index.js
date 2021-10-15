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

var window_width = $(window).width() - $('#rocket').width();

console.log($(document).height())
console.log(window.innerHeight)

var document_height = $(document).height() - window.innerHeight;

console.log(window_width);
console.log(document_height);

var rocket_offset = 500;

function scrollRocket() {
    var rocket = document.getElementById('rocket');
    var rocket_container = document.getElementById('rocket-container');
    var distanceToTop = window.pageYOffset + rocket_container.getBoundingClientRect().top;
    var elementHeight = rocket.offsetHeight;
    var scrollTop = document.getElementById('scrollable').scrollTop;

    var rocket_left = scrollTop - distanceToTop + rocket_offset;
    var rocket_top = rocket_offset + 400 - rocket_left;

    // console.log("left: " + rocket_left);
    console.log("top: " + rocket_top);

    if (rocket_top >= 0 && rocket_top < 900) {
        $('#rocket').css({
            'margin-top': rocket_top
        });
    } else {
        $('#rocket').css({
            'margin-top': 900
        });
    }
};

window.addEventListener('scroll', scrollRocket);