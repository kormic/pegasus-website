$(document).ready(function(){


    $("#send_button").click(function(e){
        e.preventDefault();
         var send = $(this);
        send.attr("disabled","disabled");
        var proceed = true;


        $(".form-horizontal input , .form-horizontal textarea").each(function(){
            $(this).css("border-color","");
            if(!$.trim($(this).val())){
                $(this).css("border-color","red");
                proceed = false;
                send.removeAttr("disabled");
            }
        });

        if(proceed) //everything looks good! proceed...
        {

            //get input field values data to be sent to server
            post_data = {
                'name'     : $('input[name=inputName]').val(),
                'email'    : $('input[name=inputEmail]').val(),
                'msg'      : $('textarea[name=inputMessage]').val()
            };


            //Ajax Post Data to Server

                $.post("submit.php",post_data,function(response){
                    send.removeAttr("disabled");
                    console.log(response.text);
                    //checking the response
                    if(response.text == 'Name too short or empty'){
                        $('input[name=inputName]').addClass("warn").val('').attr("placeholder",response.text);
                    }else if(response.text == 'Please enter a valid email!'){
                        $('input[name=inputEmail]').addClass("warn").val('').attr("placeholder",response.text);
                    }else if(response.text == 'Too short message! Please enter something.'){
                        $('textarea[name=inputMessage]').addClass("warn").val('').attr("placeholder",response.text);
                    }else{
                        //reset the inputs
                        $('input[name=inputName], input[name=inputEmail], textarea[name=inputMessage]').removeClass('warn').val('').attr("placeholder",'');
                        $("button#closeContact").trigger("click");
                    }
                },'json');
        }
    });
});
