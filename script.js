$('.attribution-btn').on('click', function() {
    // $('.attribution-container').toggleClass('hidden');
    
    if ($('.attribution-container').hasClass('hidden')) {
        $('.attribution-container').fadeIn();
        $('.attribution-container').removeClass('hidden');
    } else {
        $('.attribution-container').fadeOut();
        $('.attribution-container').addClass('hidden');
    };
});