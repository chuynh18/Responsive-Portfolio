"use strict";

window.onload = function() {

    anime.timeline()
        .add({
            targets: '#welcome',
            translateY: ["45%", "50%"],
            opacity: [0,1],
            duration: 1200,
            easing: "linear"
        })
        .add({
            targets: '#welcome',
            translateY: ["50%", "55%"],
            opacity: 0,
            duration: 1200,
            easing: "linear"
        })
        .add({
            targets: '#blockall',
            opacity: 0,
            duration: 1500,
            easing: "linear"
        })
        .add({
            targets: '.content',
            translateY: ["40%", "0%"],
            duration: 1700,
            offset: '-=1500',
            complete: function() {
                document.getElementById("blockall").style.display = "none";
            }
        });
}