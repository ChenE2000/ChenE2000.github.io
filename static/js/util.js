$(function() {
    $(".nav a").click(function() {
        showSnack("error", "Comming Soon!!!")
    })

    $("#to_top").click(function() {
        if ($(window).scrollTop() == 0) return
        $('body,html').animate({
            scrollTop: 0
        }, 1000)

    })



})