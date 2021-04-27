$(document).ready(function() {
    $('.catalog__inner').slick({
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/c-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/c-right.svg"></button>'
    });

    $('ul.orders__tabs').on('click', 'li:not(.orders__tab_active)', function() {
        $(this)
              .addClass('orders__tab_active').siblings().removeClass('orders__tab_active')
              .closest('div.container').find('div.orders__content').removeClass('orders__content_active').eq($(this).index()).addClass('orders__content_active');
    });
    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e){
                e.preventDefault();
                $('.orders-item__content').eq(i).toggleClass('orders-item__content_active');
                $('.orders-item__list').eq(i).toggleClass('orders-item__list_active');
            })
        })
    }

    toggleSlide('.orders-item__link');
    toggleSlide('.orders-item__back');

    $('.button_modal').on('click', function() {
        $('#consultation, .overlay').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('#consultation, .overlay, #order, #thanks').fadeOut('slow');
    });

    $('.button_price').each(function(i) {
    	$(this).on('click', function(){
    		$('#order .modal__descr').text($('.orders-item__subheader').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
    	})
    })

    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});
