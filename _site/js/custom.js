//custom js goes here

$("iframe").wrap("<div class='embed-container'/>");


// Closes the sidebar menu
$(".menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $('.logo').toggleClass('open');
});

if ($(window).width()> 992) {
    $('#slide-navigation li a').hover(
        function(){
            $(this).addClass('hover');
            $('.slide img').attr('src', $(this).data('img'));
        },
        function(){
            $(this).removeClass('hover');
            $('.slide img').attr('src', $('.slide').data('img'));
        }
    );
}

$(window).on('resize', function(){
    if ($(window).width()> 992) {
        $('#slide-navigation li a').hover(
            function(){
                $(this).addClass('hover');
                $('.slide img').attr('src', $(this).data('img'));
            },
            function(){
                $(this).removeClass('hover');
                $('.slide img').attr('src', $('.slide').data('img'));
            }
        );
    }
});

if ($(window).width()> 992) {
    $('.slide-link').hover(
        function(){
            $(this).addClass('hover');
            $(this).find('span').show();
            $('.link-slide img').attr('src', $(this).data('img'));
            $('.link-slide img').removeClass('hidden');
        },
        function(){
            $(this).removeClass('hover');
            $(this).find('span').hide();
            $('.link-slide img').attr('src', $('.slide').data('img'));
            $('.link-slide img').addClass('hidden');
        }
    );
}

$(window).on('resize', function(){
    if ($(window).width()> 992) {
        $('.slide-link').hover(
            function(){
                $(this).addClass('hover');
                $(this).find('span').show();
                $('.link-slide img').attr('src', $(this).data('img'));
                $('.link-slide img').removeClass('hidden');
            },
            function(){
                $(this).removeClass('hover');
                $(this).find('span').hide();
                $('.link-slide img').attr('src', $('.slide').data('img'));
                $('.link-slide img').addClass('hidden');
            }
        );
    }
});

// Closes the project in mind 
$("#xclose").click(function(e) {
    e.preventDefault();
    $(".project-in-mind").toggleClass("active");
    if($('.project-in-mind').hasClass('active')) {
        $.scrollLock( true );
    } else {
         $.scrollLock( false );
    }
});
// Opens the project in mind
$(".xtoggle").click(function(e) {
    e.preventDefault();
    $(".project-in-mind").toggleClass("active");
    if($('.project-in-mind').hasClass('active')) {
        $.scrollLock( true );
    } else {
         $.scrollLock( false );
    }
});

jQuery(window).on('load', function(){
    $('.loading-overlay').fadeOut();
});

jQuery(document).ready(function( $ ) {
    $('a:not([target="_blank"], .outbound, .menu-toggle, .close-toggle, .xtoggle, #xclose, .coming-soon)').on('click', function(event){
        if ( event.ctrlKey||event.metaKey ) {
            $('html, body').addClass('ctrlKey');
        } else {
            $('.loading-overlay').fadeIn();
        }
    });
    $('input[type=radio]').change(function() {
        // When any radio button on the page is selected,
        // then deselect all other radio buttons.
        $('input[type=radio]:checked').not(this).prop('checked', false);
    });
});
