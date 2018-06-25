$(document).ready(function () {
    // alert("loaded");
    var el = document.getElementById('text');
    console.log("El in Vanilla JS", el);
    console.log("EL in jQuery", $(el));
    $('#text').html("This is now my text");
    $('.my-input').val("New input val");
    $('#go-button').on('mouseenter',function () {
        console.log("Button clicked!");
    });

});