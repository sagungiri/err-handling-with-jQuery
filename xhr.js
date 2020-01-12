$(document).ready(function(){

  

    $('#theForm').on('submit', function(e){
        e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/prod1.json",
        dataType: "json",
        success: function(data)
        {
            
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
    
          $.getJSON("functionError.json", function(data){

            var Error_data = '';
                    $.each(data, function(key, value){
                    
                        Error_data += '<h2>'+value.status+'</h2>'+
                                    '<p>'+value.message+'</p>'+
                                    '<li>'+value.reason1+'</li>'+
                                    '<li>'+value.reason2+'</li>'+
                                    '<li>'+value.reason3+'</li>'
                    });

                   
                   function showMessage() {
                    $(".modal-content").append(Error_data); 

                    $('.bg-modal').css('display', 'flex');
                    $('.close').on('click', function(){
                     $('.bg-modal').css('display', 'none');
                    });    
                
                    function closeBox(){
                        $('.bg-modal').hide();    
                    }
                
                    clearInterval(closeBox);
                    setInterval(closeBox, 3000);
                }
                showMessage();

          });
      
        },
      });

    });
})
