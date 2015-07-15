/**
 * Created by hl on 2015/3/16.
 */

$(document).ready(function () {
    var nowuser = getUrlParameter("userid");
    //alert(nowuser);
    if(nowuser!=undefined && nowuser!=""){
        $("#message").append("<p>"+nowuser+"</p>");
        //$("#show_user").append("<p>"+USERID+"</p>");
        //window.location.href = "0index.html";
        //$.mobile.pageContainer.pagecontainer("change","0index.html",{foo:"wenjen",transition:"slide",reload:"true"});
        $.cookie("nowuser",nowuser);
        //localStorage.setItem("nowuser",nowuser);
        window.location.href = "0index.html";
    }else{
        // similar behavior as an HTTP redirect
        //alert("no user id");
        //window.location.replace("0login.html");
        window.location.href = "0login.html";
    }
});

//Get url parameters
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
