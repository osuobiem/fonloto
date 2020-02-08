(function ($) {
    "use strict";

    initLottos()
    $('.quick-play').on('click', function (e) {
        e.preventDefault()
        var lottoButtons = document.querySelectorAll('.seed-btn');
        lottoButtons.forEach(lottoButton => {
            $(lottoButton).trigger('click')
        })
    })
    $('.btn-clear').on('click', function (e) {
        e.preventDefault()
        var index = $(this).siblings('.seed-btn').data('lotto')
        window._lotto[index] = {
            common_balls: [],
            power_balls: []
        }
        adjust()
    })
    $('.pic-num.main [data-value]').on('click', function (e) {
        e.preventDefault()
        var seed = $(this).parent().parent().siblings('.coupon-head').find('.seed-btn');
        var index = seed.data('lotto');

        if ($(this).hasClass('coloured')) {
            window._lotto[index].common_balls.splice(window._lotto[index].common_balls.indexOf($(this).data('value')), 1)
        } else {
            if (window._lotto[index].common_balls.length < 5) {
                window._lotto[index].common_balls.push($(this).data('value'))
            }
        }
        adjust()
    })
    $('.pic-num.bonus [data-value]').on('click', function (e) {
        e.preventDefault()
        var seed = $(this).parent().parent().siblings('.coupon-head').find('.seed-btn');
        var index = seed.data('lotto');

        if ($(this).hasClass('coloured')) {
            window._lotto[index].power_balls.splice(window._lotto[index].power_balls.indexOf($(this).data('value')), 1)
        } else {
            if (window._lotto[index].power_balls.length < 1) {
                window._lotto[index].power_balls.push($(this).data('value'))
            }
        }
        adjust()
    })
    $('.seed-btn').on('click', function (e) {
        e.preventDefault()
        var index = $(this).data('lotto');
        var commons = Array.from({length: 54}, (x, i) => i + 1);
        var powers = Array.from({length: 12}, (x, i) => i + 1);

        var commons_shuffled = commons.sort(() => 0.5 - Math.random());
        var powers_shuffled = powers.sort(() => 0.5 - Math.random());

        window._lotto[index].common_balls = commons_shuffled.slice(0, 5)
        window._lotto[index].power_balls = powers_shuffled.slice(0, 1)


        adjust()
    })

    function adjust(el = '') {
        if (el != '') {
            var lottoButton = $(el);
            var index = $(lottoButton).data('lotto');
            var ball_container = $(this).parent().parent().siblings('.pic-keys');
            var common_balls = ball_container.find('.pic-num.main').children('[data-value]')
            var power_balls = ball_container.find('.pic-num.bonus').children('[data-value]')
            common_balls.removeClass('coloured')
            power_balls.removeClass('coloured')
            if (window._lotto && window._lotto[index] && window._lotto[index].common_balls) {
                window._lotto[index].common_balls.forEach(ball => {
                    ball_container.find('.pic-num.main').children('[data-value="' + ball + '"]').addClass('coloured')
                })
            }
            if (window._lotto && window._lotto[index] && window._lotto[index].power_balls) {
                window._lotto[index].power_balls.forEach(ball => {
                    ball_container.find('.pic-num.bonus').children('[data-value="' + ball + '"]').addClass('coloured')
                })
            }
        } else {
            var lottoButtons = document.querySelectorAll('.seed-btn');
            lottoButtons.forEach(lottoButton => {
                var index = $(lottoButton).data('lotto');
                var ball_container = $(lottoButton).parent().parent().siblings('.pic-keys');
                var common_balls = ball_container.find('.pic-num.main').children('[data-value]')
                var power_balls = ball_container.find('.pic-num.bonus').children('[data-value]')
                common_balls.removeClass('coloured')
                power_balls.removeClass('coloured')
                if (window._lotto && window._lotto[index] && window._lotto[index].common_balls) {
                    window._lotto[index].common_balls.forEach(ball => {
                        ball_container.find('.pic-num.main').children('[data-value="' + ball + '"]').addClass('coloured')
                    })
                }
                if (window._lotto && window._lotto[index] && window._lotto[index].power_balls) {
                    window._lotto[index].power_balls.forEach(ball => {
                        ball_container.find('.pic-num.bonus').children('[data-value="' + ball + '"]').addClass('coloured')
                    })
                }

                // parent.parent.sibilings('.selected-items').find('.rdm-seed-45')
                // parent.parent.sibilings('.selected-items').find('.rdm-seed-20')

                var html = ''
                window._lotto[index].common_balls.forEach(num => {
                    html += '<span class="marked">' + num + '</span>'
                })
                $(lottoButton).parent().parent().siblings('.selected-items').find('.rdm-seed-45').html(html)

                var html = ''
                window._lotto[index].power_balls.forEach(num => {
                    html += '<span class="marked">' + num + '</span>'
                })
                $(lottoButton).parent().parent().siblings('.selected-items').find('.rdm-seed-20').html(html)

            })
        }
    }

    function initLottos() {
        var lottoButtons = document.querySelectorAll('.seed-btn');
        window._lotto = []
        lottoButtons.forEach(lottoButton => {
            var index = $(lottoButton).data('lotto');
            window._lotto[index] = {
                common_balls: [],
                power_balls: []
            }
        })
    }
}(jQuery));	