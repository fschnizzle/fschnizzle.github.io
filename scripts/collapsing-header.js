$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        // Changes
        $('header').addClass("fixed");
        $('.fa-shopping-cart').removeClass("bubble");
        $('.header-top-middle-container .header-search').show();
        $('.header-top-middle-container .header-logo-main').hide();
        
    }
    else{
        // Reverse Changes
        $('header').removeClass("fixed");
        $('.fa-shopping-cart').addClass("bubble");
        $('.header-top-middle-container .header-search').hide();
        $('.header-top-middle-container .header-logo-main').show();

    }
});



// Remove logo main, replace with search bar