$(function () {
    var el = document.getElementById('text');

    $('#main-header').find('p').addClass('HAH'); // Since it doesnt find any p's in the main header it doesnt do anything
    $('#main').find('p').addClass('HAH'); // The p element in main gets the Class

    $(document).on('contextmenu', function () {
        return false;
    });
    $(document).on('click', function () {

    })
    $(document).on('mousedown', function (event) {
        event.stopPropagation();
        if (event.which == 3)
        {
            $('.hidden').removeClass('shown');

            if ($(event.target).is('img'))
            {
                $('.saveimg, .newtab').addClass('shown');
            }
            else if ($(event.target).is('a'))
            {
                $('.newtab').addClass('shown');
            }
            $('#context').css({
                top: event.pageY,
                left: event.pageX
            });

            $('#context').fadeIn();
        }
        else {
            $('#context').fadeOut();
        }

    });

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