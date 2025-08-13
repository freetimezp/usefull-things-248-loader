$(document).ready(function () {
    $(".loader .text").html(function (index, html) {
        return html.replace(/\S/g, `<span>$&</span>`);
    });

    $(".loader .text").css("visibility", "visible");

    var tl = anime.timeline({
        easing: "easeInOutQuint",
    });

    tl.add({
        targets: ".loader .text > span",
        translateY: [300, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
    })
        .add({
            targets: ".loader .text > span",
            translateY: [0, -500],
            opacity: [1, 0],
            delay: anime.stagger(200),
        })
        .add({
            targets: ".loader .text > span",
            height: "0px",
            delay: anime.stagger(150),
        })
        .add({
            targets: ".loader .stripe > span",
            translateY: [0, "-100%"],
            delay: anime.stagger(100),
        });
});
