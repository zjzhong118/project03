$(document).ready(function() {
    $.scrollify({
        section : ".scroll-section",
        interstitialSection: "footer",
        touchScroll: false,
        before: function(activeIndex, sections) {
            var currentSection = sections[activeIndex].attr("data-section-name");
            var activeCircle = $(".scroll-section-nav").find("." + currentSection);
            $(".scroll-section-nav").find(".active").removeClass("active");
            activeCircle.addClass("active");
        }
    });
})

$(".scroll-section-nav a").on("click", function(e) {
    e.preventDefault();
    console.log(e)
})

$(window).on("keypress", function(e) {
    if (e.keyCode === 32) {
        e.preventDefault();
        $.scrollify.next();
    }
})
