$(function(){

    $('#myAlert').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e){
        e.preventDefault();
    });

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();

    $('[rel="tooltip"]').click(function(e){
        e.preventDefault();
    });

    $('#contact').focus(function(){
       $(this).blur();
    });
});