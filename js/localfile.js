/**
 * Created by hl on 2015/1/27.
 */

$(document).ready(function () {
    var lastsel;
    $("#jqGrid").jqGrid({
        //url: 'csvtojson.json',
        url: RESTFUL_HOST+RESTFUL_SRV_QUERY_CN_WORDS_TYPE1,
        editurl: 'clientArray',
        mtype: "GET",
        datatype: "json",
        //page: 1,
        colNames:['編號','年度', '年級', '課次','生字','生字注音','部首','部首注音','總筆畫','部首外筆畫','字義教學','造詞','例句','延伸詞語解釋','成語教學','字形辨別','字音辨別','教學圖卡'],
        colModel: [
            { name:"id", index:'id', sorttype:"int", width: 55},
            { name: '年度',index:'年度', width: 75 ,editable:true, edittype:"select", editoptions:{value:"99:99;100:100;101:101;102:102"}},
            { name: '年級',index:'年級',  width: 75 ,editable:true},
            { name: '課次',index:'課次',  width: 75 ,editable:true},
            { name: '生字',index:'生字',  width: 75 ,editable:true},
            { name: '生字注音',index:'生字注音',  width: 75 ,editable:true},
            { name: '部首',index:'部首',  width: 75 ,editable:true},
            { name: '部首注音',index:'部首注音',  width: 75 ,editable:true},
            { name: '總筆畫',index:'總筆畫',  width: 75 ,editable:true},
            { name: '部首外筆畫',index:'部首外筆畫',  width: 75 ,editable:true},
            { name: '字義教學',index:'字義教學',  width: 200 ,editable:true},
            { name: '造詞',index:'造詞',  width: 75 ,editable:true},
            { name: '例句',index:'例句',  width: 75 ,editable:true},
            { name: '延伸詞語解釋',index:'延伸詞語解釋',  width: 200 ,editable:true, edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '成語教學',index:'成語教學',  width: 200 ,editable:true},
            { name: '字形辨別',index:'字形辨別',  width: 75 ,editable:true},
            { name: '字音辨別',index:'字音辨別',  width: 75 ,editable:true},
            { name: '教學圖卡',index:'教學圖卡',  width: 75 ,editable:true}
        ],
        loadonce : true,
        viewrecords: true,
        //width: 1600,
        height: 600,
        rowNum: 30,
        //rowList:[10, 20, 30],
        sortname:"id",
        sortorder:"desc",
        pager: "#jqGridPager",
        caption: "編輯範例",
        onSelectRow: function (id) {
            if(id && id!==lastsel){
                $("#jqGrid").jqGrid("restoreRow", lastsel);
                var editparameters = {
                    "keys" : true,
                    "oneditfunc" : null,
                    "successfunc" : null,
                    "url" : null,
                    "extraparam" : {},
                    "aftersavefunc" : null,
                    "errorfunc": null,
                    "afterrestorefunc" : null,
                    "restoreAfterError" : true,
                    "mtype" : "POST"
                }
                $("#jqGrid").jqGrid("editRow", id, editparameters);
                lastsel=id;
            }
        },
        loadError:function(xhr, status, error){
            alert("load data error: "+status);
        },
        beforeRequest:function(){
            $("#log_area").append(" beforeRequest:"+new Date($.now())+"</br>");
        },
        gridComplete:function(){
            $("#log_area").append(" gridComplete:"+new Date($.now())+"</br>");
        },
        loadComplete:function(data){
            $("#log_area").append(" loadComplete:"+new Date($.now())+"</br>");
        },
        serializeGridData:function(postData){
            $("#log_area").append(" serializeGridData:"+new Date($.now())+"</br>");
        },
        beforeProcessing:function(data, status, xhr){
            $("#log_area").append(" beforeProcessing:"+new Date($.now())+"</br>");
        }
    });

    $("#jqGrid").jqGrid("navGrid", "#jqGridPager", {edit:false, add:false, del:false});

});