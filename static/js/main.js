(function ($) {
    "use strict";

    $(document).ready(function(){
        
        $('.Vertical-Slider').css('overflow', 'hidden');

        $(function(){
            let thizHeight = $('.get-thiz-height').height();
            $('.winners-list').css({
                'height': thizHeight,
                'overflow': 'hidden'
            });
        });

        // dropdown menu scroll
        var x = $('.dropdown-item');
        $('.dropdown-menu').each(function(){
            var v = $(this).find(x).length;
            if(v <= 6) {
                $(this).css('height', 'auto');
            } else {
                $(this).css('height', '260px');
            }
        });

        // anchor tag disabled
        $(".lottery-result .result-board .table tbody tr td ul li a").on('click', function(e) {
            e.preventDefault();
        });
        $(".sold").on('click', function(e) {
            e.preventDefault();
        });

        // cart order function
        var item = $('.single-order'); 
        $('#cart-number').text(item.length);
        
        $('.tooltip-bottom').on('click', function(){
            $(this).closest(".single-order").remove();
            var item = $('.single-order'); 
            $('#cart-number').text(item.length);
            if (item.length < 1) {
                $('.all-orders').append("<h2>You don't have any tickets. Play now to add tickets to your order.</h2>");
                $('.all-orders').find('h2').addClass('cart-empty-title');
                $('.cart-empty-title').prepend('<i class="fas fa-info"></i>');
            }
        });

        // megamenu fixing for lottery 
        $('.for-lottery-btn').on('mouseover', function(){
            $('.for-lottery').css("position", "initial");
            if ($(window).width() < 960) {
                $('.for-lottery').css("position", "relative");
            }
        });

        // modal video
        $(".js-video-button").modalVideo({
            youtube:{
                controls:0,
                nocookie: true
            }
        });

        // count down
        var nodes = $('.timer');
        $.each(nodes, function (_index, value) {
            var date = $(this).data('date');

            setInterval(() => {

                var endTime = new Date(date);
                endTime = (Date.parse(endTime) / 1000);

                var now = new Date();
                now = (Date.parse(now) / 1000);

                var timeLeft = endTime - now;

                var days = Math.floor(timeLeft / 86400);
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }

                $(value).find('.day').html(days);
                $(value).find('.hour').html(hours);
                $(value).find('.minute').html(minutes);
                $(value).find('.second').html(seconds);

            }, 1000);


        });

        // box slider
        var boxSlide = $('.box-slide');
        boxSlide.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            items: 1,
            smartSpeed: 1000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z" class=""></path></svg>'],
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        // banner slider
        var bannerSlide = $('.banner-slide');
        bannerSlide.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 1,
            smartSpeed: 1000,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            navText: ['<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z" class=""></path></svg>', '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="long-arrow-alt-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14 fa-fw fa-2x"><path fill="currentColor" d="M340.485 366l99.03-99.029c4.686-4.686 4.686-12.284 0-16.971l-99.03-99.029c-7.56-7.56-20.485-2.206-20.485 8.485v71.03H12c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h308v71.03c0 10.689 12.926 16.043 20.485 8.484z" class=""></path></svg>'],
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        bannerSlide.on("translate.owl.carousel", function () {
            jQuery(this).find(".owl-item .banner-content > *").removeClass("fadeInUp animated").css("opacity","0");
            jQuery(this).find(".owl-item .part-img").removeClass("fadeInRight animated").css("opacity","0");
        });          
        bannerSlide.on("translated.owl.carousel", function () {
            jQuery(this).find(".owl-item.active .banner-content > *").addClass("fadeInUp animated").css("opacity","1");
            jQuery(this).find(".owl-item.active .part-img").addClass("fadeInRight animated").css("opacity","1");
        });

        // brand slider
        var barndSlider = $('.brand-list');
        barndSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            items: 2,
            smartSpeed: 1500,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2,
                    margin: 15
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 3,
                    margin: 30
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });

        $('.brand-list .owl-item.active').eq(2).addClass("target");

        barndSlider.on('changed.owl.carousel', function(event) {
            setTimeout(function(){
                var activeEls = $('.brand-list .owl-item.active').eq(2); // .eq(1) to get the "middle image out of 3 actives"
                setCarouselCaption( activeEls ); 
            },1);
        });
    
        function setCarouselCaption(el){
            $(".brand-list .owl-item").removeClass("target");
            el.addClass("target");
        }

        // jackpot slider
        var jackpotSlider = $('.jackpot-slider');
        jackpotSlider.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            items: 2,
            smartSpeed: 1500,
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        });

        $('.jackpot-slider .owl-item.active').eq(1).addClass("target");

        jackpotSlider.on('changed.owl.carousel', function(event) {
            setTimeout(function(){
                var activeEls = $('.jackpot-slider .owl-item.active').eq(1); // .eq(1) to get the "middle image out of 3 actives"
                setCarouselCaption( activeEls ); 
            },1);
        });
    
        function setCarouselCaption(el){
            $(".jackpot-slider .owl-item").removeClass("target");
            el.addClass("target");
        }

        // language selection menu
        $('#demo').flagStrap({
            countries: {
                "AU": "Aus",
                "BD": "Ban",
                "US": "Eng"
            },
            buttonSize: "",
            buttonType: "",
            labelMargin: "10px",
            scrollable: false,
            scrollableHeight: "350px"
        });
        
        // testimonial slider
        var testimonialSlider = $('.testimonial-slider');
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: true,
            items: 2,
            smartSpeed: 1000,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });

        // testimonial 2 slider
        var testimonialSlider2 = $('.testimonial-slider2');
        testimonialSlider2.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            smartSpeed: 1000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            thumbs: true,
            thumbsPrerendered: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
        $('.owl-next').on('click', function() {
            testimonialSlider2.trigger('next.owl.carousel');
        })
        $('.owl-prev').on('click', function() {
            testimonialSlider2.trigger('prev.owl.carousel', [300]);
        })
    });
    
    /* initilization preloader & setInterval */
    $(window).on('load',function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        setInterval(function(){ 
            $(".banner .part-img").addClass("active")
        }, 1000);
       
    });

    /* logo changing for index-2 & navbar fixed */
    $(window).on("scroll", function(){
        var fixed_top = $(".header");
        var topbar = $('.topbar');
        if( $(window).scrollTop() > 100){  
            fixed_top.addClass("animated fadeInDown fixed-header");
            topbar.hide();
            $("#logo-2").attr("src", "assets/img/logo.png");
            if ($(window).width() < 960) {
                $('.header').removeClass('fixed-header');
                $("#logo-2").attr("src", "assets/img/logo-2.png");
            }
        }
        else{
            fixed_top.removeClass("animated fadeInDown fixed-header");
            topbar.show();
            $("#logo-2").attr("src", "assets/img/logo-2.png");
            if ($(window).width() < 960) {
                topbar.hide();
                $("#logo-2").attr("src", "assets/img/logo-2.png");
            }
        }
    });

}(jQuery));	







