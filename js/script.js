$(window).on("load", function() {
    
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(600);
    });
});

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.","", "Web Developer.", "", "", "Undergraduate Student."],
        typeSpeed: 125,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            938: {
                items: 4,
            }
        },
    });

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
             $(".chart").easyPieChart({
               easing: "easeInOut",
               barColor: "#fff",
               trackColor: false,
               scaleColor: false,
               lineWidth: 5,
               size: 152,
               onStep: function (from, to, percent) {
                   $(this.el).find(".percent").text(Math.round(percent));
                },
            });
        }

        $(".counter").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");

          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 3000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
    });



    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });


    $("#navigation li a").click(function(e) {
        e.preventDefault();
        
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, 1900);
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        var body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }


    $("#filters a").click(function() {
        $("#filters .current").removeClass(".current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOption: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

});



