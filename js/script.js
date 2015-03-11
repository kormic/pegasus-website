$(function(){

    $('#myAlert').click(function(e){
        e.preventDefault();
        $('#successAlert').slideDown();
    });

    $('a.pop').click(function(e){
        e.preventDefault();
    });

    $('a.pop , textarea').popover();

    $('[rel="tooltip"]').tooltip();

    $('[rel="tooltip"]').click(function(e){
        e.preventDefault();
    });

    var tmp = $("li.current");

    $('#contact').click(function(){
        tmp.removeClass("active");
        $(this).parent().addClass("active");
//       $(this).blur();
    });

    $(".close").click(function(){

        tmp.addClass("active");
        $("#contact").parent().removeClass("active");

        $(".form-horizontal input , .form-horizontal textarea").each(function(){
            $(this).css("border-color","").val('');
        });

    });
});