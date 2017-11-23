$(document).ready(function() {
    $.scrollify({
        section : ".home-section",
        interstitialSection: "footer",
        before: function(activeIndex, sections) {
            var currentSection = sections[activeIndex].attr("data-section-name");
            var activeCircle = $(".home-section-nav").find("." + currentSection);
            $(".home-section-nav").find(".active").removeClass("active");
            activeCircle.addClass("active");
        }
    });
})

$(".home-section-nav a").on("click", function(e) {
    e.preventDefault();
    console.log(e)
})

$(window).on("keypress", function(e) {
    if (e.keyCode === 32) {
        e.preventDefault();
        $.scrollify.next();
    }
})
