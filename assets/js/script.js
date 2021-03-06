"use strict";

window.onload = function() {

    anime.timeline()
        .add({
            targets: '#welcome0',
            translateY: ["40%", "45%"],
            opacity: [0,1,1,0],
            duration: 2000,
            easing: "linear"
        })
        .add({
            targets: '#welcome1',
            translateY: ["40%", "45%"],
            opacity: [0,1,1,0],
            duration: 2200,
            easing: "linear",
            offset: '-=420',
        })
        .add({
            targets: '#welcome2',
            translateY: ["40%", "45%"],
            opacity: [0,1,1,1,0],
            duration: 2500,
            easing: "linear",
            offset: '-=420',
        })
        .add({
            targets: '#blockall',
            opacity: 0,
            duration: 1500,
            easing: "linear",
            complete: function() {
                document.getElementById("blockall").style.display = "none";
            }
        })
        .add({
            targets: '.content',
            translateY: ["80%", "40%", "20%", "10%", "0%"],
            duration: 1400,
            offset: '-=1770',
            easing: "linear"
        });
}