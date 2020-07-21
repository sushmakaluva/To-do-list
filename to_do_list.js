
$(document).ready(function(){
    $("#addBtn").click(function(){
        var newtask=$("#inputtext").val();
        $("ol").append("<li>" + newtask +"<a class='remove text-danger'>     X</a><hr></li>");
          $("#form1").trigger("reset");
    });
      
    $(document).on('click','.remove',function(){
      $(this).parent().remove();
    });    

  });