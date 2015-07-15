/**
 * Created by hl on 2015/4/2.
 */

var RESTFUL_HOST = "http://192.168.1.229:8088"; //服務主機

var REST_LOGIN = "/check/user/password/"

var RESTFUL_SRV_QUERY_CN_WORDS_ALL = "/srv/cn/get/all/"; //get all records, return json rows array
var RESTFUL_SRV_QUERY_CN_WORDS_TYPE1 = "/srv/cn/get/type1/"; //get all, return json
var RESTFUL_SRV_SAVE_CN_WORDS_ONE = "/srv/cn/insert/one/";//get years select options
var RESTFUL_SRV_CN_WORDS_SAVE_SINGLE = "/srv/cn/insert/single/";//get years select options
var RESTFUL_SRV_CN_WORDS_DEL_SINGLE = "/srv/cn/del/single/";//get years select options
var RESTFUL_SRV_QUERY_CN_OPTIONS_YEAR = "/srv/cn/options/year/";//get years select options

//grid dynamic columns
var RESTFUL_GRID_COLUMN_NAMES = "/grid/col/names";

//upload file service
var RESTFUL_UPLOAD_CSV = "/uploads/csv";
var RESTFUL_UPLOAD_CSV_BROKEN = "/uploads/csv/broken";//多音字
var RESTFUL_UPLOAD_CSV_BROKEN_FONT = "/uploads/csv/broken_font";//多音字有套字體

//for dataTables
var REST_BROKEN_1 = "/srv/cn/get/all/1/"; //query all broken with font mapping records
var REST_BROKEN_2 = "/srv/cn/get/all/2/"; // CUDR for broken with font mapping db records
var REST_BROKEN_MAXID = "/srv/cn/get/maxid/"; // broken with font mapping db max id +1

//
var REST_MSRV3_INDEX = "/msrv3/index/menu/"

