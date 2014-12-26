/**
 * Created by hl on 2014/12/11.
 */

var RESTFUL_HOST = "http://192.168.1.229:8088"; //服務主機
var RESTFUL_URL_TEST = "/msrv3/"; //測試用


function btn_test(){
    var url = RESTFUL_HOST;
    var data = "Sending data";
    $.ajax({
        type: "GET",
        url:url,
        contentType: "text/plain; charset=utf-8",
        dataType: "text",
        success: function(data, status, jqXHR){
            alert(data);
        },
        error: function(jqXHR, status){
            alert("FAIL!");
        }
    });
}


