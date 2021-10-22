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
    var scrollTop = window.pageYOffset;

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
var rocket_offset = 300;
var rocket_max_margin = 700;

function scrollRocket() {
    var rocket_container = document.getElementById('rocket-container');
    var distanceToTop = window.pageYOffset + rocket_container.getBoundingClientRect().top;
    var pageOffset = window.pageYOffset;

    var rocket_top = -pageOffset + distanceToTop + rocket_offset;

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

// Text scramble

var respondToVisibility = function(element, callback) {
    var options = {
        root: document.documentElement
    }

    var observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            callback(entry.intersectionRatio > 0);
        });
    }, options);

    observer.observe(element);
}

var observer = new IntersectionObserver(function(entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
        scrambleText("fandyness");
    } else {
        resetText("fandyness", "Storing Data on DNA")
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#fandyness"));

function scramble(a, p, original) {
    var letters = ['A', 'C', 'G', 'T'];
    var a = a.split('');

    for (var k = 0; k < a.length; k++) {
        if (Math.random() <= p) {
            a[k] = letters[Math.floor(Math.random() * letters.length)];
        }
    }
    return a.join('');
}

async function scrambleText(id) {
    await sleep(350);
    var text_area = document.getElementById(id);
    var original_text = "Storing Data on DNA";

    var words = original_text.split(' ');
    var scrambled_words = [];

    // scrambled_words[i] = scramble(words[i], 1);
    // text_area.innerHTML = scrambled_words.join(' ');

    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < words.length; i++) {
            scrambled_words[i] = scramble(words[i], 1 - (j / 5));
        }

        text_area.innerHTML = scrambled_words.join(' ');
        await sleep(200);
    }

    text_area.innerHTML = original_text;
}

function resetText(id, str) {
    document.getElementById(id).innerHTML = str;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}