$(".masks img").width(200).css({
    position: "absolute",
    top: 0,
    left: 0,
});

$(".masks img").each(function(idx, img) {
    make = function(img) {
        $(img).css("top", -$(img).height())
        $(img).css("left", Math.random() * ($(window).width() - $(img).width()))
        $(img).animate({
            top: $(window).height() - $(img).height()
        }, 10000 + Math.random() * 5000)
        setTimeout(function() { make(img) }, 10000 + 5000 * Math.random())
    }
    make(img)
});

$(".container").children().each(function(idx, el) {
    e = $(el)
    e.hide()
    function happen(e) {
        setTimeout(function() {
            e.fadeIn();
        }, 2000 + idx * 3000);
    }
    happen(e);
});

function cleanUp(vidName) {
    $("audio")[0].pause();
    $(".masks img").hide();
    $(".container").hide();
    $(vidName).show()
}

$(".yes").click(function() {
    cleanUp("#yes-iframe")
})
$(".no").click(function() {
    cleanUp("#no-iframe")
})

function run() {
    $(".no").animate({
        'left' : '+=20px',
        'top' : '+=20px'
    }, 0);
}
$(".no").mouseover(run).mousemove(run);
