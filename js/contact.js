$(document).ready(function(){
    $("#send_button").click(function(e){
        e.preventDefault();
        var proceed = true;

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
                console.log(response.text);
                if(response.type == 'error'){
                    output = '<div class="error">'+response.text+'</div>';
                }else{
                    $('input[name=inputName], input[name=inputEmail], textarea[name=inputMessage]').val('');
                    output = '<div class="success">'+response.text+'</div>';
                }
            },'json');
        }
    });
});
