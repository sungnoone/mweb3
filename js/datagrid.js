/**
 * Created by hl on 2014/12/11.
 */

var ROW_ID = "";//記錄 row id

$(document).ready(function () {
    var lastsel;
    var grid = $("#jqGrid");
    //$("#jqGrid").jqGrid("GridDestroy");
    //$("#jqGrid").jqGrid("GridUnload");
    $("#jqGrid").jqGrid({
        //url: 'csvtojson.json',
        url: RESTFUL_HOST+RESTFUL_SRV_QUERY_CN_WORDS_ALL,
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
                    top:100,
                    left:100
                },
                addOptions:{},
                delOptions:{}
            }},
            { name:"編號", index:'編號', sorttype:"int", width: 55},
            { name: '年度',index:'年度', width: 75 ,editable:true, edittype:"select", editoptions:{value:"99:99;100:100;101:101;102:102"}},
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
    $("#jqGrid").jqGrid("editGridRow", lastsel, {top:10,left:10});
    //$("#jqGrid").jqGrid("navGrid", "#jqGridPager", {edit:false, add:false, del:false});
});


