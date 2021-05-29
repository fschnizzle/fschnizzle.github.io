$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        // Changes
        $('header').addClass("fixed");
        $('.fa-shopping-cart').removeClass("bubble");
        // $('.header-top-middle-container .header-search').show();
        $('.header-logo-main-container .header-logo-main').hide();
        $('.header-logo-main-container .header-search-fixed').show();
        $('.header-search-container .header-search').hide();
        
    }
    else{
        // Reverse Changes
        $('header').removeClass("fixed");
        $('.fa-shopping-cart').addClass("bubble");
        // $('.header-top-middle-container .header-search').hide();
        $('.header-logo-main-container .header-logo-main').show();
        $('.header-logo-main-container .header-search-fixed').hide();
        $('.header-search-container .header-search').show();

    }
});



// Remove logo main, replace with search bar