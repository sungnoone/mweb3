/**
 * Created by hl on 2015/3/16.
 */
$(document).ready(function () {
    $("#username").focus();
});

$(document).keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        sendLoginInfo();
    }
});

//send login infomation -- redirect page
function sendLoginInfo(){
    var user_name = $("#username").val();
    var user_password = $("#password").val();
    //alert("username:"+user_name);
    if(user_name==""){
        return;
    }
    postData = {"username":user_name,"password":user_password};
    $.ajax({
        url:RESTFUL_HOST+REST_LOGIN,
        type:"POST",
        data:postData,
        success:function(data,status,xhr){
            if(data=="0"){
                //var urlWithUserInfo = "../mweb3/0check.html?userid="+user_name;
                //alert(urlWithUserInfo);
                $.cookie("nowuser",user_name);
                window.location.href = "0index.html";
            }else{
                alert("登入失敗，帳號密碼錯誤！");
                //window.location.href = AUTH_URL;
                return;
            }
        },
        error:function(xhr,status,e){
            alert("驗證失敗："+ e.toString());
        }

    });
}


