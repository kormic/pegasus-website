$(document).ready(function(){
    $("#send_button").click(function(){

        var proceed = true;

        if(proceed) //everything looks good! proceed...
        {

            //get input field values data to be sent to server
            post_data = {
                'name'     : $('input[name=inputName]').val(),
                'email'    : $('input[name=inputEmail]').val(),
                'msg'      : $('textarea[name=inputMessage]').val()
            };

            if(post_data.name == ''){
                post_data.name = 'a';
            }

            //Ajax Post Data to Server
            $.post("submit.php",post_data,function(response){
                alert(response.text);
                if(response.type == 'error'){
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    output = '<div class="success">'+response.text+'</div>';
                }
            });
        }
    });
});
