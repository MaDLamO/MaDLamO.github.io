$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOfsett = $(window).scrollTop();

    /*Fixed Header*/
    checkScroll(scrollOfsett);

    $(window).on("scroll", function () {
        scrollOfsett = $(this).scrollTop();

        checkScroll(scrollOfsett);

    });

    function checkScroll(scrollOfsett) {
        if( scrollOfsett >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }

});
