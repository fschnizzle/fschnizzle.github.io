$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        // Changes
        $('header').addClass("fixed");
        $('.fa-shopping-cart').removeClass("bubble");
        // $('.header-top-middle-container .header-search').show();
        $('.header-logo-main-container .header-logo-main').hide();
        $('.header-logo-main-container .header-search-fixed').show();
        $('.header-search-container .header-search').hide();
        $('.header-cart-label-container .running-total').show();
        $('.header-menu-logo-icon').show();
        $('.fa-bars').hide();
 
        
        
    }
    else{
        // Reverse Changes
        $('header').removeClass("fixed");
        $('.fa-shopping-cart').addClass("bubble");
        // $('.header-top-middle-container .header-search').hide();
        $('.header-logo-main-container .header-logo-main').show();
        $('.header-logo-main-container .header-search-fixed').hide();
        $('.header-search-container .header-search').show();
        $('.header-cart-label-container .running-total').hide();
        $('.header-menu-logo-icon').hide();
        $('.fa-bars').show();

    }
});



// Remove logo main, replace with search bar


// Sidebar JS

function openNav() {
    document.getElementById("sidebar-menu").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("sidebar-menu").style.width = "0";
}

function openCart() {
    document.getElementById("sidebar-shopping-cart").style.width = "350px";
  }
  
function closeCart() {
    document.getElementById("sidebar-shopping-cart").style.width = "0";
}