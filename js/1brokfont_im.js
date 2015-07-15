/**
 * Created by hl on 2015/4/9.
 */


$(document).ready(function () {
    $(function(){
        $("#fileupload").fileupload({
            url:RESTFUL_HOST+RESTFUL_UPLOAD_CSV_BROKEN_FONT,
            type:"POST",
            dataType:"json",
            done:function(e,data){
                try{
                    $.each(data.result.files, function (index,file) {
                        $("<p/>").text(file.name+" => "+file.error).appendTo(document.body);
                    });
                }catch (e){
                    $("<p/>").text(e.toString()).appendTo(document.body);
                }
            },
            add: function(e,data){
                data.context = $("<p/>").text("Uploading...").appendTo(document.body);
                data.submit();
            },
            progressall:function(e,data){
                var progress = parseInt(data.loaded/data.total*100,10);
                $("#progress .bar").css("width",progress+"%");
                //data.submit();
            }
        });
    });
});

