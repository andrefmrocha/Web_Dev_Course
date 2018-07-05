$(document).ready(function () {
    var el = document.getElementById('text');

    $('[href="https://google.com" ]').on('click', function (event) {
       console.log('Linking to google?');
       event.preventDefault();
       // Returning a bool can prevent an action from happening

    });
    $('[data-trigger = "dropdown"]').on('mouseenter', function () {
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');
        $('.profile-menu').on('mouseleave', function () {
            submenu.removeClass('active');
        })
    });

    $('#prepend, #append, #replace').on('click', function (event) {
        event.preventDefault();
        var el = $(event.currentTarget);
        var action = el.attr('id');
        var content = $('.text').val()
        if (action == "prepend")
        {
            $('#main').prepend('<a href = "#">' + content + '</a>');
        }
        else if(action == "append")
        {
            $('#main').append('<a href = "#">' + content + '</a>');
        }
        else if (action == "replace")
        {
            $('#main').html('<a href = "#">' + content + '</a>');
        }

        $('.text').val('');
    });



});