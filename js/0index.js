/**
 * Created by hl on 2014/12/11.
 */


$(document).ready(function () {
    var nowuser = $.cookie("nowuser");
    if(nowuser==undefined || nowuser==""){
        window.location.href = "0login.html";
    }else{
        $("#header").append(" -- "+nowuser);
    }

    var menuHtml = $.ajax({
        url:RESTFUL_HOST+REST_MSRV3_INDEX,
        type:"POST",
        data:{"user_id":$.cookie("nowuser")},
        success:function(data,status,xhr){
            $("#main").append(data).trigger("create");
            //alert(data);
        },
        error:function(xhr,status,e){
            alert("驗證失敗："+ e.toString());
        }

    });
});

