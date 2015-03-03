/**
 * Created by hl on 2015/2/25.
 */
var FIELD_OPTIONS_YEAR = "year";
var FIELD_OPTIONS_YEAR_DEFAULT = "default";

$(document).ready(function () {
    var lastsel;
    var grid = $("#jqGrid");
    $("#jqGrid").jqGrid({
        //url: 'csvtojson.json',
        url: RESTFUL_HOST+RESTFUL_SRV_QUERY_CN_WORDS_ALL,
        ajaxSelectOptions:{
            type:"GET",
            contentType:"application/json, charset=utf-8",
            dataType:"json",
            cache:false
        },
        editurl: 'clientArray',
        mtype: "GET",
        datatype: "json",
        //page: 1,
        colNames:['Edit Actions','編號','年度','年級','課次','生字','生字注音','部首','部首注音','總筆畫','部首外筆畫','字義教學','造詞教學-造詞','造詞教學1','造詞教學2','成語教學','字形辨別','字音辨別','教學圖卡'],
        colModel: [
            {name:"actions", width:100, formatter:"actions", formatoptions:{
                key:true,
                editformbutton:true,
                editOptions:{
                    closeAfterEdit:true,
                    onclickSubmit:function(params,postdata){
                        //console.log(params);
                        //console.log(postdata);
                        var editJson = {};
                        for(var ikey in postdata){
                            //console.log(key);
                            editJson[ikey] = postdata[ikey];
                        }
                        //console.log(editJson);
                        $.ajax({
                            type: "POST",
                            url:RESTFUL_HOST+RESTFUL_SRV_CN_WORDS_SAVE_SINGLE,
                            data: JSON.stringify(editJson),
                            contentType: "application/json; charset=UTF-8",
                            dataType: "text",
                            success: function(data, status, jqXHR){
                                alert(data);
                            },
                            error: function(jqXHR, status){
                                alert("Save data fail!");
                            }
                        });
                    }
                },
                delOptions:{
                    //mtype:"POST",
                    //url:RESTFUL_HOST+RESTFUL_SRV_CN_WORDS_DEL_SINGLE,
                    reloadAfterSubmit:true,
                    onclickSubmit:function(params,postdata){
                        //console.log(params);
                        //console.log(postdata);
                        $.ajax({
                            type: "POST",
                            url:RESTFUL_HOST+RESTFUL_SRV_CN_WORDS_DEL_SINGLE,
                            data: postdata,
                            contentType: "text",
                            dataType: "text",
                            success: function(data, status, jqXHR){
                                alert(data);
                            },
                            error: function(jqXHR, status){
                                alert("Save data fail!");
                            }
                        });
                    }

                }
            }},
            { name:"編號", index:'編號', sorttype:"int", width:20,editable:true,editoptions:{readonly:"readonly"}},
            { name: '年度',index:'年度', width: 75 ,editable:true, edittype:"select",
                editoptions:{
                    readonly:true,
                    dataUrl:RESTFUL_HOST+RESTFUL_SRV_QUERY_CN_OPTIONS_YEAR,
                    buildSelect:function(jsonArray){
                        //alert(jsonArray.length);
                        //var response = $.parseJSON(jsonArray);
                        //console.log(jsonArray);
                        var s = "<select id='yearOptions' name='yearOptions'>";
                        for (var v1=0; v1<jsonArray.length; v1++){
                            //var oneJson = $.parseJSON(jsonArray[v1].val());
                            var optionName = jsonArray[v1][FIELD_OPTIONS_YEAR];
                            var optionDefault = jsonArray[v1][FIELD_OPTIONS_YEAR_DEFAULT];
                            //console.log(optionName+" "+optionDefault);
                            if(optionDefault=="true"){
                                s += "<option value='"+optionName+"' selected='selected'>"+optionName+"</option>";
                            }else{
                                s += "<option value='"+optionName+"'>"+optionName+"</option>";
                            }
                        }
                        s += "</select>";
                        //console.log(s);
                        return s
                    }
                }},
            { name: '年級',index:'年級',  width: 75 ,editable:true},
            { name: '課次',index:'課次',  width: 75 ,editable:true},
            { name: '生字',index:'生字',  width: 75 ,editable:true},
            { name: '生字注音',index:'生字注音',  width: 75 ,editable:true},
            { name: '部首',index:'部首',  width: 75 ,editable:true},
            { name: '部首注音',index:'部首注音',  width: 75 ,editable:true},
            { name: '總筆畫',index:'總筆畫',  width: 75 ,editable:true,hidden:true,editrules:{edithidden:true}},
            { name: '部首外筆畫',index:'部首外筆畫',  width: 75 ,editable:true,hidden:true, editrules:{edithidden:true}},
            { name: '字義教學',index:'字義教學',  width: 200 ,editable:true,hidden:true,editrules:{edithidden:true},edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '造詞教學-造詞',index:'造詞教學-造詞',  width: 200 ,editable:true, hidden:true,editrules:{edithidden:true}, edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '造詞教學1',index:'造詞教學1',  width: 200 ,editable:true, hidden:true,editrules:{edithidden:true}, edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '造詞教學2',index:'造詞教學2',  width: 200 ,editable:true, hidden:true,editrules:{edithidden:true}, edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '成語教學',index:'成語教學',  width: 200 ,editable:true, hidden:true,editrules:{edithidden:true}, edittype:"textarea", editoptions:{rows:2,cols:"10"}},
            { name: '字形辨別',index:'字形辨別',  width: 75 ,editable:true, hidden:true,editrules:{edithidden:true}},
            { name: '字音辨別',index:'字音辨別',  width: 75 ,editable:true, hidden:true,editrules:{edithidden:true}},
            { name: '教學圖卡',index:'教學圖卡',  width: 75 ,editable:true, hidden:true,editrules:{edithidden:true},hidedlg: true}
        ],
        loadonce : true,
        viewrecords: true,
        autowidth: true,
        height: "auto",
        rowNum: 25,
        altRows: true,
        //rowList:[10, 20, 30],
        sortname:"編號",
        sortorder:"desc",
        pager: "#jqGridPager",
        caption: "編輯範例",
        gridview: true,
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
                //$("#jqGrid").jqGrid("editRow", id, editparameters);
                //$("#jqGrid").jqGrid("editGridRow", id, {top:10,left:10});
                lastsel=id;
            }
        }
    });
    $("#jqGrid").jqGrid("editGridRow", lastsel,{});
    $("#jqGrid").jqGrid("navGrid", "#jqGridPager", {edit:false, add:true, del:false});
});


/*============================================================================================*/

//colModel
