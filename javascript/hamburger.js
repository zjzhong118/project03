$(document).ready(function () {

    $(".mobile-nav-trigger").on("click", function() {
        if ($(".mobile-nav").hasClass("active")) {
            $(".mobile-nav").removeClass("active");
        }
        else {
            $(".mobile-nav").addClass("active");
        }
    })
})
