/**
 * Created by hl on 2015/2/25.
 */
var editor1;
var editor2;

$(document).ready(function () {
    //var nowuser = localStorage.getItem("nowuser");
    var nowuser = $.cookie("nowuser");
    if(nowuser==undefined || nowuser==""){
        window.location.href = "0login.html";
    }

    editor1 = new $.fn.dataTable.Editor({
        ajax:{
            url:RESTFUL_HOST+REST_BROKEN_2,
            data:{"user_id":$.cookie("nowuser")}
        },
        table:'#myTable',
        idSrc:"id",
        fields:[
            {label:'編號',name:'id',type:"readonly"},
            {label:'前綴詞',name:'before_word'},
            {label:'字',name:'word'},
            {label:'後接詞',name:'after_word'},
            {label:'破音字體',name:'apply_font_name'}
        ]
    });

    editor2 = new $.fn.dataTable.Editor({
        ajax:{
            url:RESTFUL_HOST+REST_BROKEN_2,
            data:{"user_id":$.cookie("nowuser")}
        },
        table:'#myTable',
        idSrc:"id",
        fields:[
            {label:'編號',name:'id',type:"readonly",def:function(){
                return $.ajax({
                    url:RESTFUL_HOST+REST_BROKEN_MAXID,
                    dataType:"text",
                    async:false
                }).responseText;
            }},
            {label:'前綴詞',name:'before_word'},
            {label:'字',name:'word'},
            {label:'後接詞',name:'after_word'},
            {label:'破音字體',name:'apply_font_name'}
        ]
    });

    editor1.on('initCreate',function(){
    });

    //after remove
    editor1.on("submitComplete",function(e,json,data){
    });

    //after submit create new data
    editor2.on("submitComplete",function(e,json,data){
    });

    //after submit create new data
    editor2.on("submitError",function(e,xhr,err,thrown,data){
    });

    // New record
    $('a.editor_create').on('click', function (e) {
        e.preventDefault();
        editor2.create( {
            title: '新增資料',
            buttons: 'Add'
        } );
    } );

    // Edit record
    $('#myTable').on('click', 'a.editor_edit', function (e) {
        e.preventDefault();
        editor1.edit( $(this).closest('tr'), {
            title: '編輯資料',
            buttons: 'Update'
        });
    } );

    // Delete a record
    $('#myTable').on('click', 'a.editor_remove', function (e) {
        e.preventDefault();
        editor1.remove( $(this).closest('tr'), {
            title: '刪除資料',
            message: '你確定要刪除這筆資料?',
            buttons: 'Delete'
        } );
    } );

    var oTable = $('#myTable').dataTable( {
        //"dom":"Tfrtip",
        processing:true,
        serverSide:false,
        pageLength:10,
        lengthMenu:[10,20,30,50,100],
        ajax:{
            url:RESTFUL_HOST+REST_BROKEN_1,
            dataSrc: "rows",
            data:{"user_id":$.cookie("nowuser")}
        },
        columns:[
            { data: "id" },
            { data: "before_word" },
            { data: "word" },
            { data: "after_word" },
            { data: "apply_font_name" },
            {
                data: null,
                className:"center",
                defaultContent:"<a href='' class='editor_edit'>Edit</a> / <a href='' class='editor_remove'>Delete</a>"
            }
        ],
        order:[[0,"desc"]]
        //tableTools:{
        //    sRowSelect:"os",
        //    aButtons:[
        //        {sExtends:"editor_create",editor:editor},
        //        {sExtends:"editor_edit",editor:editor},
        //        {sExtends:"editor_remove",editor:editor}
        //    ]
        //}
    } );
});

