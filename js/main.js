$(document).ready(function () {
    
    var button_click = 0;
    $('#ham_btn').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('on');
        $('.fullpageMenu').toggleClass('visibility'); 
        button_click++;

        if (0 == button_click % 2) {
            $('body').css({
              
                overflowY: 'visible'
            });
        } else {
            $('body').css({
             
                overflowY: 'hidden'
            });
        }
    });
    
    
});

$(function () {
    // init
    var controller = new ScrollMagic.Controller();

    // section_5
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#pinContainer", 0.5, {
            z: -150
        }) // move back in 3D space
        .to("#pinContainer", 1, {
            x: "-25%"
        }) // move in to first panel
        .to("#pinContainer", 0.5, {
            z: 0
        }) 

    new ScrollMagic.Scene({
            triggerElement: "#section_5",
            triggerHook: "onLeave",
            duration: "200%"
        })
        .setPin("#section_5")
        .setTween(wipeAnimation)
       /* .addIndicators() // add indicators (requires plugin)*/
        .addTo(controller);
    
    
});



