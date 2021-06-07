$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        // Changes
        $('header').addClass("fixed");
        // $('.fa-shopping-cart').removeClass("bubble");
        // $('.header-top-middle-container .header-search').show();
        $('.header-logo-main-container .header-logo-main').hide();
        $('.header-logo-main-container .header-search-fixed').show();
        $('.header-search-container .header-search').hide();
        $('.header-cart-label-container .running-total').show();
        $('.header-menu-logo-icon').show();
        $('.fa-bars').hide();

        // Content changes
        $('.content').addClass("header-fixed");

 
        
        
    }
    else{
        // Reverse Changes
        $('header').removeClass("fixed");
        // $('.fa-shopping-cart').addClass("bubble");
        // $('.header-top-middle-container .header-search').hide();
        $('.header-logo-main-container .header-logo-main').show();
        $('.header-logo-main-container .header-search-fixed').hide();
        $('.header-search-container .header-search').show();
        $('.header-cart-label-container .running-total').hide();
        $('.header-menu-logo-icon').hide();
        $('.fa-bars').show();

        // Content changes
        $('.content').removeClass("header-fixed");

    }
});



// Remove logo main, replace with search bar


// Sidebar JS

function openNav() {
    document.getElementById("sidebar-menu").style.width = "100%" ; 
    // 250px
  }
  
function closeNav() {
    document.getElementById("sidebar-menu").style.width = "0";
}

function openCart() {
    document.getElementById("sidebar-shopping-cart").style.width = "100%";
  }
  
function closeCart() {
    document.getElementById("sidebar-shopping-cart").style.width = "0";
}


// Change Genre (small screen) JS

function getSelectedGenre() {
    var selectedGenre = document.getElementById("genre-selection").value;
    console.log(selectedGenre);

    if (selectedGenre == "independent-artists"){
        // Hide all other genres
        $('.pop-music').hide();
        $('.classic-artists').hide();
        $('.dj-and-electronica').hide();

        // Remove current selection
        $('#independent-artists-img').removeClass("currently-selected");
        $('#classic-artists-img').removeClass("currently-selected");
        $('#dj-and-electronica-img').removeClass("currently-selected");
        $('#pop-music-img').removeClass("currently-selected");


        // Show selected Genre and change current selection
        $('.independent-artists').show();
        $('#independent-artists-img').addClass("currently-selected");
        
    }

    else if (selectedGenre == "classic-artists"){
        // Hide all other genres
        $('.independent-artists').hide();
        $('.dj-and-electronica').hide();
        $('.pop-music').hide();

        // Remove current selection
        $('#independent-artists-img').removeClass("currently-selected");
        $('#classic-artists-img').removeClass("currently-selected");
        $('#dj-and-electronica-img').removeClass("currently-selected");
        $('#pop-music-img').removeClass("currently-selected");

        // Show selected Genre
        $('.classic-artists').show();
        $('#classic-artists-img').addClass("currently-selected");
    }

    else if (selectedGenre == "dj-and-electronica"){
        // Hide all other genres
        $('.independent-artists').hide();
        $('.classic-artists').hide();
        $('.pop-music').hide();

        // Remove current selection
        $('#independent-artists-img').removeClass("currently-selected");
        $('#classic-artists-img').removeClass("currently-selected");
        $('#dj-and-electronica-img').removeClass("currently-selected");
        $('#pop-music-img').removeClass("currently-selected");

        // Show selected Genre
        $('.dj-and-electronica').show();
        $('#dj-and-electronica-img').addClass("currently-selected");
    }

    else if (selectedGenre == "pop-music"){
        // Hide all other genres
        $('.independent-artists').hide();
        $('.classic-artists').hide();
        $('.dj-and-electronica').hide();

        // Remove current selection
        $('#independent-artists-img').removeClass("currently-selected");
        $('#classic-artists-img').removeClass("currently-selected");
        $('#dj-and-electronica-img').removeClass("currently-selected");
        $('#pop-music-img').removeClass("currently-selected");

        // Show selected Genre
        $('.pop-music').show();
        $('#pop-music-img').addClass("currently-selected");
    }
}

// Change Genre (small screen) JS

function changeGenre(clicked_id) {
    // Remove current selection
    $('#independent-artists-img').removeClass("currently-selected");
    $('#classic-artists-img').removeClass("currently-selected");
    $('#dj-and-electronica-img').removeClass("currently-selected");
    $('#pop-music-img').removeClass("currently-selected");

    // Add Currently selected class to clicked img id
    var x = document.getElementById(clicked_id).id;
    var hash = "#";
    var id_string = hash.concat(String(x));
    $(id_string).addClass("currently-selected");

    // Change Catalogue page to match genre

        // Add code HERE

    
    
}


function openPopup(img) {
    document.getElementById("pop-up-window").style.width = "100%";
    var name = img.src;
    document.getElementById('popup-img').src=name
    console.log("happened")
  }

function closePopup() {
    document.getElementById("pop-up-window").style.width = "0%";
    console.log("happened 2");
}







// var showElementsWhenWidth = function(){
//     if ( $(window).width() < 1379 ) {
//         $('.independent-artists').show();
//         $('.classic-artists').show();
//         $('.dj-and-electronica').show();
//         $('.pop-music').show();
//     }
// }




// Categories JS
// If "categories-container-id".width < 1080px
// if (document.getElementById("categories-container-id").getBoundingClientRect().width < 1080){
//     console.log("YEAHHEYHDHDJDJ");
// }