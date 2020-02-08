// lottery ticket animation when scroll
(function ($) {
    "use strict";
    
    $(window).on("scroll", function(){
        var $section = $('#lottery-ticket');
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.lottery-ticket').addClass('active');
        }
    });

}(jQuery));	