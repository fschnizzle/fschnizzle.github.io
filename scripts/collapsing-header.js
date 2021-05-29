$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("fixed");
        $('.fa-shopping-cart').removeClass("bubble");
    }
    else{
        $('header').removeClass("fixed");
        $('.fa-shopping-cart').addClass("bubble");

    }
});