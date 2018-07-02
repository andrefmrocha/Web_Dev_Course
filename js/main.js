$(document).ready(function () {
    $('[data-trigger = "dropdown"]').on('mouseenter', function () {
        var submenu = $(this).parent().find('.submenu');
        submenu.addClass('active');
        $('.profile-menu').on('mouseleave', function () {
            submenu.removeClass('active');
        })
    });

    $('#prepend, #append, #replace').on('click', function (event) {
        var el = $(event.currentTarget);
        var action = el.attr('id');
        if (action == "prepend")
        {

        }
        else if(action == "append")
        {

        }
        else if (action == "replace")
        {

        }
    });



});