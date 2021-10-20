import "bootstrap";
import '@fortawesome/fontawesome-free/js/all'

var $ = require("jquery");
window.jQuery = $;
window.$ = $;

var menuToggle = document.getElementById("menuToggle");
var scrollHeight = 100; // make navbar colored/hidden beyond this
var sm = 768; // small viewport width
var xs = 576; // medium viewport width

// reset iGEM
if (window.location.href.includes("igem.org")) {
  var ids = ["HQ_page", "content", "bodyContent", "mw-content-text"];
  for (var i = 0; i < ids.length; i++)
    document.querySelector("#" + ids[i]).removeAttribute("id");
  var classes = ["mw-content-ltr"];
  for (var i = 0; i < classes.length; i++) {
    var elements = document.querySelectorAll("." + classes[i]);
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove(classes[i]);
    }
  }
}

$("#menuSwitch").click(function () {
  $("#main-nav").toggleClass("menu-open");

  if ($(".navbar").hasClass("nav-colored")) {
    $(".navbar").removeClass("nav-colored");
  } else if ($(window).scrollTop() > scrollHeight) {
    $(".navbar").addClass("nav-colored");
  }
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > scrollHeight) {
    if (!$("#main-nav").hasClass("menu-open")) {
      $(".navbar").addClass("nav-colored");
    }
  } else {
    $(".navbar").removeClass("nav-colored");
  }
});

// close navbar on escape
$(document).keyup(function (e) {
  if (e.keyCode == 27 && $("#main-nav").hasClass("menu-open")) {
    // escape key maps to keycode `27`
    $("#main-nav").removeClass("menu-open");
    $(".navbar").removeClass("desktop-menu");
  }
});

// navbar show on hover
$("#nav-headings li").hover(
  // handler in
  function () {
    $("#nav-headings li").each(function () {
      $(this).removeClass("active");
      $(this).addClass("inactive");
    });

    $(this).removeClass("inactive");
    $(this).addClass("active");

    var id = $(this).find("a").attr("id");

    $("#nav-items .tab-pane").each(function () {
      $(this).removeClass("active");
    });

    var tab_name = id.split("-")[0];
    $("#" + tab_name + "-pane").addClass("active");
  },
  // handler out - nothing
  function () {}
);

// when menu checkbox status changes
$("label[for='menuToggle']").click(function () {
  // close submenus
  $("#nav-headings li").each(function () {
    $(this).removeClass("active");
    $(this).removeClass("inactive");
  });

  $("#nav-items .tab-pane").each(function () {
    $(this).removeClass("active");
  });

  // if menu has been opened, make navbar transparent
  if (!$("#menuToggle").is(":checked")) {
    $(".navbar").addClass("nav-transparent");
    $(".navbar").addClass("desktop-menu");
    $(".navbar").removeClass("nav-colored");
  } else {
    $(".navbar").removeClass("desktop-menu");
    if (
      document.body.scrollTop >= scrollHeight ||
      document.documentElement.scrollTop >= scrollHeight
    ) {
      $(".navbar").removeClass("nav-transparent");
      $(".navbar").addClass("nav-colored");
    }
  }
});

$("#desktop-nav #close-label p").click(function () {
  $("#menuToggle").prop("checked", false);
  $(".navbar").removeClass("desktop-menu");
});

// show/hide nav on mobile
$(".nav-heading").on("click", function () {
  if (getWidth() <= sm) {
    if ($(this).siblings("ul").css("display") === "none") {
      $("#menuContent ul").slideUp();
      $(this).siblings("ul").slideDown();
    } else {
      $("#menuContent ul").slideUp();
    }
  }
});

$("#menuSwitch").on("click", function () {
  if (getWidth() <= sm) {
    $("#menuContent ul").slideUp();
  }
});

$("#close-label p, #menuSwitch").hover(
  // handler in
  function () {
    $("#menuSwitch").addClass("hover");
    $("#close-label p").addClass("hover");
  },
  // handler out
  function () {
    $("#menuSwitch").removeClass("hover");
    $("#close-label p").removeClass("hover");
  }
);

// show/hide footer on mobile
$(".footer-heading").on("click", function () {
  if (getWidth() <= xs) {
    if ($(this).siblings("ul").css("display") === "none") {
      $("#footerNav ul").slideUp();
      $(this).siblings("ul").slideDown();
    } else {
      $("#footerNav ul").slideUp();
    }
  }
});

// dark mode
$('label[for="themeSwitchInput"]').click(function() {
  if ($("#themeSwitchInput").is(":checked")) {
      $('body').addClass('dark');
  }
  else {
      $('body').removeClass('dark');
  }
}); 

// Insert Favicons
$("link[rel='shortcut icon']").remove(); 

$("head").append("<link rel='apple-touch-icon' sizes='180x180' href='https://2021.igem.org/wiki/images/2/2a/T--Aachen--icons--favicons--apple-touch-icon.png'>");
$("head").append("<link rel='icon' type='image/png' sizes='32x32' href='https://2021.igem.org/wiki/images/8/8b/T--Aachen--icons--favicons--favicon-32x32.png'>");
$("head").append("<link rel='icon' type='image/png' sizes='16x16' href='https://2021.igem.org/wiki/images/7/7a/T--Aachen--icons--favicons--favicon-16x16.png'>");
$("head").append("<link rel='manifest' href='data:application/manifest+json,{ 'name': 'iGEM Aachen 2021', 'short_name': 'iGEM Aachen 2021', 'icons': [ { 'src': 'https://2021.igem.org/wiki/images/b/ba/T--Aachen--icons--favicons--android-chrome-192x192.png', 'sizes': '192x192', 'type': 'image/png' }, { 'src': 'https://2021.igem.org/wiki/images/e/ea/T--Aachen--icons--favicons--android-chrome-512x512.png', 'sizes': '512x512', 'type': 'image/png' } ], 'theme_color': '#182632', 'background_color': '#182632', 'display': 'standalone' }'/>");
// $("head").append("<link rel='mask-icon' href='https://2021.igem.org/wiki/images/7/7d/T--Aachen--icons--favicons--safari-pinned-tab.svg' color='#182632'>");
$("head").append("<link rel='shortcut icon' href='https://2021.igem.org/wiki/images/f/f6/T--Aachen--icons--favicons--favicon.png'>");
$("head").append("<meta name='apple-mobile-web-app-title' content='iGEM Aachen 2021'>");
$("head").append("<meta name='apple-mobile-web-app-status-bar-style' content='#182632'></meta>");
$("head").append("<meta name='application-name' content='iGEM Aachen 2021'>");
$("head").append("<meta name='msapplication-TileColor' content='#182632'>");
$("head").append("<meta name='theme-color' content='#182632'></meta>");
$("head").append("<meta name='msapplication-square150x150logo' content='https://2021.igem.org/wiki/images/c/cf/T--Aachen--icons--favicons--mstile-150x150.png'/>");