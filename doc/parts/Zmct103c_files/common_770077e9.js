jQuery(function(){function a(a){a&&"com"==a?$("div.com-fav").find("a[class\x3dadd2Fav]").html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"):a&&"prod"==a?$("div.pro-fav").find("a[class\x3dadd2Fav]").html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eAlready in Product Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetProductList"):
a&&"offer"==a&&$("div.off-fav").find("a[class\x3dadd2Fav]").html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eAlready in Offer Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetOfferList")}function c(a,e,b){var c=encodeURIComponent(window.location.href),d=$(".state").eq(0);e='\x3cli class\x3d"user" id\x3d"welUser"\x3eWelcome \x3ca href\x3d"http://membercenter.made-in-china.com"\x3e\x3cstrong\x3e'+(e||"")+"\x3c/strong\x3e\x3c/a\x3e!\x3c/li\x3e";
b='\x3cli class\x3d"message menu-item"\x3e\x3ca href\x3d"http://membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox" alt\x3d"'+b+' New Message(s)" title\x3d"'+b+' New Message(s)" class\x3d"red"\x3e\x3ci class\x3d"icon"\x3e\x26#xf0e0;\x3c/i\x3e'+b+"\x3c/a\x3e\x3c/li\x3e";c='\x3cli class\x3d"sign"\x3e\x3ca rel\x3d"nofollow" href\x3d"https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d'+c+'"\x3eSign Out\x3c/a\x3e\x3c/li\x3e';a?(d.empty(),d.html(e+b+c)):(d.empty(),
d.html('\x3cli\x3eNew user? \x3ca rel\x3d"nofollow" href\x3d"http://membercenter.made-in-china.com/join/"\x3eJoin Free\x3c/a\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x3ca rel\x3d"nofollow" href\x3d"javascript:test();"\x3eSign In\x3c/a\x3e\x3c/li\x3e'))}$(".add2Fav").click(function(b){var e=arguments.callee;b.preventDefault();var g=$(this),h=g.attr("cz-username"),d=g.attr("cz-sourceid"),k=g.attr("cz-sourcetype"),l="/addFav.do?userName\x3d"+h+"\x26sourceId\x3d"+d+"\x26sourceType\x3d"+k;$.ajax({url:"http://www.made-in-china.com"+
l,type:"post",dataType:"jsonp",jsonp:"callBackParam",success:function(d){if(d)if("00"==d.execFlag){window.MIC_SRVRNM=document.domain;d="http://"+window.location.host+(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/transition.do";var b=new LoginLayer2({callback:function(d){b.unload();$.ajax({url:(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/headInfo.do",type:"post",error:function(){},dataType:"json",success:function(d){c(d[0].status,
d[0].welcomeUserName,d[0].newMailNumber);$.ajax({url:"http://www.made-in-china.com"+l,dataType:"jsonp",jsonp:"callBackParam",success:function(d){d&&("01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href="/notice/fav":"03"==d.execFlag&&(a(k),g.unbind("click",e)))}})}})}});b.load("https://login.made-in-china.com?xcase\x3dlogonPage4Showroom\x26logonInCode\x3d17\x26newShow\x3d1",d)}else"01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href=
"/notice/fav":"03"==d.execFlag&&(a(k),g.unbind("click",e))},error:function(){}})});var b=!1;$("#add2Fav2").click(function(a){a.preventDefault();if(b)return!1;a.preventDefault();a=$("#add2Fav2").attr("cz-username");var e=$("#add2Fav2").attr("cz-sourceid"),g=$("#add2Fav2").attr("cz-sourcetype"),h="/addFav.do?userName\x3d"+a+"\x26sourceId\x3d"+e+"\x26sourceType\x3d"+g;$.ajax({url:"http://www.made-in-china.com"+h,type:"post",dataType:"jsonp",jsonp:"callBackParam",success:function(d){if(d)if("00"==d.execFlag){window.MIC_SRVRNM=
document.domain;d="http://"+window.location.host+(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/transition.do";var a=new LoginLayer2({callback:function(d){a.unload();$.ajax({url:(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/headInfo.do",type:"post",error:function(){},dataType:"json",success:function(d){c(d[0].status,d[0].welcomeUserName,d[0].newMailNumber);b=!0;$.ajax({url:"http://www.made-in-china.com"+
h,dataType:"jsonp",jsonp:"callBackParam",success:function(d){d&&("01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href="/notice/fav":"03"==d.execFlag&&($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"),$("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"http://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href",
"http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target","_blank"),$("#add2Fav2").unbind(),$("#add2Pic").unbind()))}})}})}});a.load("https://login.made-in-china.com?xcase\x3dlogonPage4Showroom\x26logonInCode\x3d17\x26newShow\x3d1",d)}else"01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href="/notice/fav":"03"==d.execFlag&&($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target",
"_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"),$("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"http://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target","_blank"),b=!0,$("#add2Fav2").unbind(),$("#add2Pic").unbind())},error:function(){}})});$("#add2Pic").click(function(a){a.preventDefault();if(b)return!1;
a=$("#add2Pic").attr("cz-username");var e=$("#add2Pic").attr("cz-sourceid"),g=$("#add2Pic").attr("cz-sourcetype"),h="/addFav.do?userName\x3d"+a+"\x26sourceId\x3d"+e+"\x26sourceType\x3d"+g;$.ajax({url:"http://www.made-in-china.com"+h,type:"post",dataType:"jsonp",jsonp:"callBackParam",success:function(d){if(d)if("00"==d.execFlag){window.MIC_SRVRNM=document.domain;d="http://"+window.location.host+(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/transition.do";
var a=new LoginLayer2({callback:function(d){a.unload();$.ajax({url:(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/headInfo.do",type:"post",error:function(){},dataType:"json",success:function(d){c(d[0].status,d[0].welcomeUserName,d[0].newMailNumber);b=!0;$.ajax({url:"http://www.made-in-china.com"+h,dataType:"jsonp",jsonp:"callBackParam",success:function(d){d&&("01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href=
"/notice/fav":"03"==d.execFlag&&($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"),$("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"http://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target",
"_blank"),$("#add2Fav2").unbind(),$("#add2Pic").unbind()))}})}})}});a.load("https://login.made-in-china.com?xcase\x3dlogonPage4Showroom\x26logonInCode\x3d17\x26newShow\x3d1",d)}else"01"==d.execFlag?window.location.href="/notice/error":"02"==d.execFlag?window.location.href="/notice/fav":"03"==d.execFlag&&($("div.com-fav").find("a[id\x3dadd2Fav2]").html('\x3cspan class\x3d"sh-ico sh-ico-fav com-fav"\x3e\x3c/span\x3eAlready in Company Favorites').attr("target","_blank").attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList"),
$("div.com-fav").find("#add2Pic").html('\x3cimg src\x3d"http://img.made-in-china.com/img/athena/already-fav.png" alt\x3d"Add to Company Favorites"\x3e').attr("href","http://membercenter.made-in-china.com/micfavorite.do?xcase\x3dgetCompanyList").attr("target","_blank"),b=!0,$("#add2Fav2").unbind(),$("#add2Pic").unbind())},error:function(){}})});window.buyReport=function(a,e,b){document.domain="made-in-china.com";$.ajax({url:(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+
"/head/headInfo.do",type:"post",dataType:"json",success:function(c){var d="http://www.made-in-china.com/reviewAR.do?xcase\x3dreviewARForFree\x26comId\x3d"+a+"\x26reportId\x3d"+e;if("1"==c[0].status)window.location.href="http://www.made-in-china.com/reviewAR.do?xcase\x3dreviewARForFree\x26comId\x3d"+a+"\x26reportId\x3d"+e;else return c='\x3ciframe id\x3d"ifr" src\x3d"http://membercenter.made-in-china.com/account.do?xcase\x3dreportLogin\x26nextPage\x3d'+encodeURIComponent(d)+"\x26comId\x3d"+a+"\x26reportId\x3d"+
e+"\x26userName\x3d"+b+'" frameborder\x3d"0" allowTransparency\x3d"true" style\x3d"margin:0 auto;padding:0; border:0; width:650px;overflow:static;height:610px;z-index:999;position:absolute;z-index:9999"\x3e\x3c/iframe\x3e',jQuery("body").append(c),jQuery("#ifr").css("top",jQuery(document).scrollTop()+jQuery(window).height()/2-100).css("left",jQuery(window).width()/2-300),$("body").mask&&$("body").mask("","","0.4"),$(".maskdivgen").bgiframe&&$(".maskdivgen").bgiframe(),!1}})};window.viweReport=function(a,
e){document.domain="made-in-china.com";$.ajax({url:(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/headInfo.do",type:"post",async:!1,dataType:"json",success:function(b){if("1"==b[0].status)window.open("/readFreeTransition?comId\x3d"+a+"\x26recId\x3d"+e);else return b='\x3ciframe id\x3d"ifr" src\x3d"http://membercenter.made-in-china.com/account.do?xcase\x3dstsLogon\x26viewReportFree\x3d0\x26fromAthena\x3dtrue\x26arReportId\x3d'+e+'" frameborder\x3d"0" allowTransparency\x3d"true" style\x3d"margin:0 auto;padding:0; border:0; width:650px;overflow:static;height:610px;z-index:999;position:absolute;z-index:9999"\x3e\x3c/iframe\x3e',
jQuery("body").append(b),+"\v1"||window.XMLHttpRequest?jQuery("#ifr").css("top",jQuery(window).height()/2-120).css("left",jQuery(window).width()/2-225).css("position","fixed"):jQuery("#ifr").css("top",jQuery(window).height()/2-120).css("left",jQuery(window).width()/2-225),$("body").mask&&$("body").mask("","","0.4"),$(".maskdivgen").bgiframe&&$(".maskdivgen").bgiframe(),!1}})};$(".sh-ico-local-time").bind("mouseover",function(){$(".local-time",this).show()});$(".sh-ico-local-time").bind("mouseout",
function(){$(".local-time").hide()});$(".J-add2Rep").click(function(a){a.preventDefault();var b=$(this).attr("cz-reportId"),c=$(this);$.ajax({url:"http://www.made-in-china.com/ajaxfunction.do?xcase\x3dgetShoppingCart\x26callback\x3d?",type:"post",dataType:"json",success:function(a){100>a.number?$.ajax({url:"http://www.made-in-china.com/reportcart.do?xcase\x3dadd\x26callback\x3d?",type:"post",dataType:"json",data:{reportId:b},success:function(d){c.html('\x3cspan class\x3d"sh-ico sh-ico-check"\x3e\x3c/span\x3eEdit Report Cart').attr("href",
"http://www.made-in-china.com/report-cart/")}}):window.open("http://www.made-in-china.com/reportcart.do?xcase\x3dlist\x26over\x3d1","")}});c.unbind("click",arguments.callee)});$(".ar-preview .title").click(function(){$(this).siblings(".ar-preview-cnt").toggleClass("show");$(this).find(".sh-ico").toggleClass("sh-ico-less")});$(".sample-cnt-link").hover(function(){$(this).parents(".ar-sample-act").addClass("on-top").end().siblings(".sample-cnt").show()},function(){$(this).parents(".ar-sample-act").removeClass("on-top").end().siblings(".sample-cnt").hide()})});
jQuery(function(){$(".slide-list\x3eli:gt(0)").hide();new Slide({autoPlay:!1,speed:500,preLoadSliderNum:1,parallelPreLoad:!0,naturalOrder:0,animationType:"scrollX",bannerEventType:"mouseover",bannerEventMouseoverDelay:300,imgDepositSrc:"lazysrc",preLoadSliderNum:1,imgPlaceholderSrc:"",carrier:{content:".scenes-slide .slide-list",banner:".scenes-slide .slider-controls"},extend:{linkDom:function(a,c){var b=a.carrier.content,f=a.carrier.banner;if(b&&0<$(b).length&&f&&0<$(f).length){var e=[],b=$(b).children("li"),
g=$(f).children("li");$.each(b,function(a,d){var b=new c;b.sliderObj=$(d);b.bannerObj=$(g.get(a));e.push(b)});return e}}}})});
$(document).ready(function(){var a=/\[@br@\]/g,c=function(b){return b.replace(/[^\u0000-\u00FF]/g,"**").replace(/\r\n/g,"[@br@]").replace(a,"**").replace(/[\n\u000A]/g,"**").length};pasteTextExceedMaxLength.counter=c;var b=document.getElementById("inquiryContent");b&&placeholder(b);b&&pasteTextExceedMaxLength(b,function(a){f(a)},function(a){f(a,!0)});var f=function(a,b){var f=c(a);$("#zeroCount").html(b?4E3:f)};(b=document.getElementById("keyWord"))&&placeholder(b)});
jQuery(function(){window.submitSearchByView=function(a){var b=$("#viewExhibition");b&&($("[name\x3d'viewType']").val(a),$("#pageNumber").val(1),$("#pageUrlFrom").val("1"),b.submit())};window.submitSearchBySize=function(){var a=$("#viewExhibition");a&&($("#pageSize").val($("#pageSizeSel").val()),$("#pageNumber").val(1),$("#pageUrlFrom").val("1"),a.submit())};window.submitSearchByPage=function(a){var b=$("#viewExhibition");b&&($("#pageNumber").val(a),$("#pageUrlFrom").val("1"),b.submit())};window.submitSearchByGroupOrCatId=
function(a){var b=$("#viewExhibition");b&&($("#pageNumber").val(1),$("#offerGroupInfo").val(a),b.submit())};$(".item").each(function(){$(this).find(".contact").hide();$(this).bind("mouseover",function(){$(this).find(".contact").show()});$(this).bind("mouseout",function(){$(this).find(".contact").hide()})});var a;$("div.more").find("#seemore").bind("mouseover",function(){$(".more").find("ul").show()});$("div.more").find("#seemore").bind("mouseout",function(){a=setTimeout(function(){$(".more").find("ul").hide()},
500)});$("div.more").find("ul").bind("mouseover",function(){clearTimeout(a)});$("div.more").find("ul").bind("mouseout",function(){a=setTimeout(function(){$(".more").find("ul").hide()},500)});$(".sider-list li").hover(function(){$(this).find(".sub-group-list").length&&$(this).addClass("hover").find(".sub-group-list").show()},function(){$(this).find(".sub-group-list").length&&$(this).removeClass("hover").find(".sub-group-list").hide()});$("#J-product-group-more").toggle(function(){$(this).html('Less \x3ci class\x3d"icon"\x3e\x26#xf0d8;\x3c/i\x3e').parents(".more").siblings(".more-list").slideDown()},
function(){$(this).html('More \x3ci class\x3d"icon"\x3e\x26#xf0d7;\x3c/i\x3e').parents(".more").siblings(".more-list").slideUp()});var c=!0;$(".sider-list-wrap .more").click(function(){c?($(this).siblings(".sider-list-sub").slideDown().end().find("a").html('Less \x3ci class\x3d"icon"\x3e\x26#xf0d8;\x3c/i\x3e'),c=!1):($(this).siblings(".sider-list-sub").slideUp().end().find("a").html('More \x3ci class\x3d"icon"\x3e\x26#xf0d7;\x3c/i\x3e'),c=!0)});$(".J-contant-tric .item").each(function(){$(this).find("#J-opContact").addClass("hide");
$(this).bind("mouseover",function(){$(this).find("#J-opContact").removeClass("hide");$(this).find("#J-inquiry").length&&$(this).find("#J-inquiry").removeClass("hide")});$(this).bind("mouseout",function(){$(this).find("#J-opContact").addClass("hide");$(this).find("#J-inquiry").length&&$(this).find("#J-inquiry").addClass("hide")})});var b=!1;$("#cateType").click(function(){b?($("div.J-slide-list").find(".sider-list").show(),$("div.J-slide-list").find(".more").show(),b=!1):($("div.J-slide-list").find(".sider-list").hide(),
$("div.J-slide-list").find(".more").hide(),b=!0)})});
var placeholder=function(){function a(a){if(a.getAttribute("placeholder")){g=a.id;g||(g="placeholder_"+(new Date).getTime(),a.id=g);var d,b,f;d=document.createElement("label");d.htmlFor=g;b=window.getComputedStyle?getComputedStyle(a,null).paddingTop:a.currentStyle.paddingTop;f=window.getComputedStyle?getComputedStyle(a,null).width:a.currentStyle.width;d.style.cssText="position:absolute; margin:"+b+" 0 0 3px; color:#BBB; width:"+f+"; cursor:text;";e=d;a.parentNode.insertBefore(e,a);c(a);""===a.value&&
(e.innerHTML=a.getAttribute("placeholder"))}}function c(a){a.onfocus=function(){var a=e;return function(){a.innerHTML=""}}();a.onblur=function(){var a=e;return function(){var b=this.getAttribute("placeholder");""===this.value&&(a.innerHTML=b)}}()}function b(a,d){a.setAttribute("placeholder",d);f||""!==a.value||(this.innerHTML=d)}var f="placeholder"in document.createElement("input"),e=null,g="";return function(c){var d;f||(a(c),d=e);this.setPlaceholder=function(a){b.call(d,c,a)}}}(),pasteTextExceedMaxLength=
function(){var a=[],c=function(d){for(var b=null,c=0;c<a.length;c++)if(a[c]===d){b=a[c];break}return b},b=function(a,b,c,e){h.checkr(a,b)?e(a):c(a)},f=function(a,c,e){a=a||window.event;a.stopPropagation?a.stopPropagation():a.cancelBubble=!0;var f=a.target||a.srcElement;9999<=(f.maxLength||parseInt(f.getAttribute("maxlength"))||0)||(f.originalMaxLength=f.maxLength||parseInt(f.getAttribute("maxlength"))||0,f.maxLength=9999,setTimeout(function(){b(f.value,f.originalMaxLength,c,function(a){pasteTextExceedMaxLength.cutText(f,
a,f.originalMaxLength);e(a)});f.maxLength=f.originalMaxLength},1))},e=/opera/i.test(window.navigator.userAgent),g=function(a,b,c){9999<=(this.maxLength||parseInt(this.getAttribute("maxlength"))||0)||!e&&(e||a.ctrlKey&&86===a.keyCode&&!a.shiftKey&&!a.altKey)||a.ctrlKey&&65===a.keyCode&&!a.shiftKey&&!a.altKey||a.ctrlKey&&67===a.keyCode&&!a.shiftKey&&!a.altKey||a.ctrlKey&&32===a.keyCode&&!a.shiftKey&&!a.altKey||a.shiftKey&&32===a.keyCode&&!a.ctrl&&!a.altKey||-1!==",9,20,16,17,18,27,112,113,114,115,116,117,118,119,120,121,122,123,44,145,19,45,36,33,35,34,144,38,40,37,39,45,35,40,34,37,12,39,36,38,33,46,".indexOf(","+
a.keyCode+",")||(a=this.originalMaxLength||this.maxLength||parseInt(this.getAttribute("maxlength"))||0,h.checkr(this.value,a)?(pasteTextExceedMaxLength.cutText(this,this.value,a),c.call(this,this.value)):b.call(this,this.value))},h=function(b,e,h,m){c(b)||(a.push(b),"number"===typeof m&&0<=m&&(m=parseInt(m),b.maxLength=m),b.addEventListener?b.addEventListener("paste",function(a){f.call(a.target,a,e,h)},!1):b.attachEvent("onpaste",function(a){f.call(window.event.srcElement,window.event,e,h)}),b.addEventListener?
b.addEventListener("keyup",function(a){g.call(a.target,a,e,h)},!1):b.attachEvent("onkeyup",function(a){g.call(window.event.srcElement,window.event,e,h)}))};h.checkr=function(a,b){return h.counter(a)>=b};h.counter=function(a){return a.length};h.cutText=function(a,b,c){a.value=b.substring(0,c)};return h}.call(this);
void function(a){var c=new Abstract({show:function(){},hide:function(){}}),c=new Clazz(c,{config:{carrier:null,trigger:"",arrUp:"\x26#xf0d8;",arrRight:"\x26#xf0da;",arrDown:"\x26#xf0d7;",arrLeft:"\x26#xf0d9;",style:{hoverCls:"hover",dropMenu:"dropmenu-hd",dropList:"dropmenu-list",arr:"icon"}},inherit:Component},function(b){function c(){this.elems.carrier.addClass(b.style.hoverCls);this.elems.arr.html(b.arrUp)}function e(){this.elems.carrier.removeClass(b.style.hoverCls);this.elems.arr.html(b.arrDown)}
b=this.setConfig(b);if(null!==b.carrier&&b.carrier.length&&""!==b.style.dropMenu&&""!==b.style.dropList){var g=this,h=this.trigger||"mouseover";this.elems.carrier=b.carrier;this.elems.menu=a(b.carrier).find("."+b.style.dropMenu);this.elems.list=a(b.carrier).find("."+b.style.dropList);this.elems.arr=this.elems.menu.find("."+b.style.arr);this.elems.menu.bind(h,function(){c.call(g)});this.elems.carrier.bind("mouseleave",function(){e.call(g)});this.show.implement(c);this.hide.implement(e)}});window.DropDown=
c}.call(Lass,jQuery);
jQuery(function(){var a=function(){},c,b=function(a,b){-1!==a.indexOf("?")?(a=a.split("?"),a[1]=a[1]?a[1]+"\x26"+b.join("\x26"):b.join("\x26"),a=a.join("?")):-1!==a.indexOf("#")?(a=a.splig("#"),a[1]="?"+b.join("\x26"),a=a.join("#")):a+="?"+b.join("\x26");return a},f="LOGON_CALLBACK_"+(new Date).valueOf(),e={style:{ifrWidth:560,ifrHeight:345,width:340,height:"auto"},text:{title:"Login",close:""},url:"",callback:a,closeBack:a},g=null,h=function(a){if(g)return g;g=this;this._={};this.elems={};this.config=
jQuery.extend(!0,{},e,a);this.init()};h.prototype={init:function(){},load:function(a,e){this.unload();window[f]=this.config.callback;var g=[],h=this;document.domain!==window.location.hostname&&g.push("domain\x3d"+document.domain);g.push("callback\x3d"+f);e=b(e,g);a=b(a,["forwardPage\x3d"+encodeURIComponent(e)]);c=art.dialog({title:"SIGN IN",id:"loginDialog",lock:!0,fixed:!0,duration:0,content:'\x3ciframe src\x3d"'+a+'" frameborder\x3d"0" style\x3d"width:'+this.config.style.ifrWidth+"px; height:"+
this.config.style.ifrHeight+'px"\x3e\x3c/iframe\x3e',close:function(){c=null;h.config.closeBack&&h.config.closeBack()}})},unload:function(){c&&c.close();window[f]=a}};window.LoginLayer2=h});
jQuery(function(){var a=function(){},c=function(a){alert(a)},b={require:[{handle:function(a){return""!==a},errMsg:"Please input keyword(s).",ok:a,err:c}],enonly:[{handle:function(a){return/^[\x00-\x7F]*$/.test(a)},errMsg:"Please input the information in English only.",ok:a,err:c}]},f=function(a){var c=jQuery.trim(a.val()),f=!0,d,k,l,m;for(m in b){k=b[m];for(var n=0;n<k.length;n++)if(l=k[n],d=Object.prototype.toString.call(l.handle).match(/\w+/g)[1].toLowerCase(),"function"===d?f=l.handle.call(a[0],
c):"regexp"===d&&(l.handle.exec(""),f=l.handle.test(c)),f)l.ok.call(a[0]);else{l.err.call(a[0],l.errMsg);break}if(!f)break}return f};$.each([{form:"#searchInKeywordSide",text:"#keyWordSide"},{form:"#searchInKeywordList",text:"#keyWordList"}],function(a,b){var c=jQuery(b.form),d=jQuery(b.text);d.each(function(a,b){new placeholder(b)});c.length&&d.length&&c.submit(function(a){f(d)||a.preventDefault()})});void function(){var a={offer:"Enter a keyword to search offers.",defaults:"Enter a keyword to search products."},
b="1"===$(".J-is-offer").val(),c=$(".J-top-search"),d=$(".J-submit",c),k=$(".J-search-word",c),l=$(".J-search-sr"),m=$("input[name\x3dsearchKeyword]",l),n="1"===$(".J-is-supplier-self").val(),p=$(".J-search-select");p.hover(function(){$(this).addClass("search-option-hover")},function(){$(this).removeClass("search-option-hover")});var s=$(".J-text",p),q=$(".option li",p);q.click(function(c){c.stopPropagation();c.preventDefault();q.removeClass("selected hide");$(this).addClass("selected hide");p.removeClass("search-option-hover");
s.html($.trim(this.innerHTML));c=this.getAttribute("cz-type");"sr"===c&&n?(k.attr("disabled",!0),d.attr("disabled",!0)):(k.attr("disabled",!1),d.attr("disabled",!1));r&&r.setPlaceholder(a["sr"===c&&b?"offer":"defaults"])});c.submit(function(a){f(k)?"sr"===q.filter(".selected").attr("cz-type")&&(a.preventDefault(),n||(m.val(k.val()),l.submit())):a.preventDefault()});var r;k.length&&(r=new placeholder(k[0]));q.filter(".selected").click();d.attr("disabled",!1)}.call(this)});
function asyncIsLogin(a){$.ajax({url:"http://"+window.location.host+(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/loginStatu.do?t\x3d"+(new Date).getTime(),type:"post",error:function(){},dataType:"json",success:function(c){a?a("1"===c[0].loginStatu):window.location.reload(!0)}})}
jQuery(function(){function a(){var a="https://login.made-in-china.com/logon.do?xcase\x3ddoLogout\x26baseNextPage\x3d"+encodeURIComponent(window.location.href)+"";$("#J-signout a").attr("href",a)}new DropDown({carrier:$("#buyer-guide"),style:{dropMenu:"dropmenu-hd",dropList:"dropmenu-list",hoverCls:"hover",arr:"icon"}});new DropDown({carrier:$("#supplier-guide"),style:{dropMenu:"dropmenu-hd",dropList:"dropmenu-list",hoverCls:"hover",arr:"icon"}});new DropDown({carrier:$("#help-guide"),style:{dropMenu:"dropmenu-hd",
dropList:"dropmenu-list",hoverCls:"hover",arr:"icon"}});$("#buyerappend").length&&$("#buyerappend").after('\x3ca href\x3d"http://purchase.made-in-china.com/trade-service/quotation-request.html" rel\x3d"nofollow"\x3ePost Sourcing Request\x3c/a\x3e\x3ca href\x3d"http://resources.made-in-china.com/industry-analysis-reports/" rel\x3d"nofollow"\x3eIndustry Analysis\x3c/a\x3e\x3ca href\x3d"http://www.made-in-china.com/tradeservice/private-sourcing-meetings.html" rel\x3d"nofollow"\x3eMeet Suppliers\x3c/a\x3e\x3ca href\x3d"http://www.made-in-china.com/trademessenger/" rel\x3d"nofollow"\x3eTradeMessenger\x3c/a\x3e');
$("#supplierappend").length&&$("#supplierappend").append('\x3ca href\x3d"http://sourcing.made-in-china.com/" rel\x3d"nofollow"\x3eSearch Sourcing Requests\x3c/a\x3e\x3ca href\x3d"http://membercenter.made-in-china.com/product.do?xcase\x3dlist" rel\x3d"nofollow"\x3eManage Products\x3c/a\x3e\x3ca href\x3d"http://membercenter.made-in-china.com/messagecenter.do?xcase\x3dinbox\x26assignFlag\x3d0" rel\x3d"nofollow"\x3eManage Messages\x3c/a\x3e\x3ca href\x3d"http://service.made-in-china.com/" rel\x3d"nofollow"\x3e\x26#x4f1a;\x26#x5458;e\x26#x5bb6;\x3c/a\x3e\x3ca href\x3d"http://www.made-in-china.com/audited-suppliers/for-suppliers/index-cn.html" rel\x3d"nofollow"\x3e\x26#x52a0;\x26#x5165;\x26#x8ba4;\x26#x8bc1;\x26#x4f9b;\x26#x5e94;\x26#x5546;\x3c/a\x3e');
window.login=function(a,b,f){a="https://login.made-in-china.com?xcase\x3dlogonPage4Showroom\x26logonInCode\x3d17\x26newShow\x3d1"+(a||"");var e="http://"+window.location.host+(null==document.getElementById("rootpath")?"":document.getElementById("rootpath").value)+"/head/transition.do",g=window.loginLayer=new LoginLayer2({callback:function(a){g.unload();asyncIsLogin(b)},closeBack:function(){f&&f()}});g.load(a,e)};$("#J-signout").length&&a()});
void function(){if(window.SlideNav){var a=new SlideNav;a.addItem("contactNow");a.addItem("tm");a.addItem("goTop");SlideNav.defaultsInit(a);a.show()}}.call(this);
window.JS_lazyload_loaded_hook||(window.JS_lazyload_loaded_hook=!0,function(){var a=jQuery.event.special,c="D"+ +new Date,b="D"+(+new Date+1);a.scrollstart={setup:function(){var b,e=function(c){var e=arguments;b?clearTimeout(b):(c.type="scrollstart",jQuery.event.handle.apply(this,e));b=setTimeout(function(){b=null},a.scrollstop.latency)};jQuery(this).bind("scroll",e).data(c,e)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}};a.scrollstop={latency:300,setup:function(){var c,
e=function(b){var e=this,d=arguments;c&&clearTimeout(c);c=setTimeout(function(){c=null;b.type="scrollstop";jQuery.event.handle.apply(e,d)},a.scrollstop.latency)};jQuery(this).bind("scroll",e).data(b,e)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}}}(),function(a){a.fn.lazyload=function(c){var b={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,skip_invisible:!0};c&&(null!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),a.extend(b,
c));var f=this;0==b.event.indexOf("scroll")&&a(b.container).bind(b.event,function(c){var g=0;f.each(function(){if(!(b.skip_invisible&&!a(this).is(":visible")||a.abovethetop(this,b)||a.leftofbegin(this,b)))if(!a.belowthefold(this,b)&&!a.rightoffold(this,b))a(this).trigger("appear");else if(++g>b.failure_limit)return!1});c=a.grep(f,function(a){return!a.loaded});f=a(c)});this.each(function(){var c=this;c.loaded=!1;a(c).one("appear",function(){this.loaded||a("\x3cimg /\x3e").bind("load",function(){a(c).hide().attr("src",
a(c).attr("data-original"))[b.effect](b.effectspeed);c.loaded=!0}).attr("src",a(c).attr("data-original"))});0!=b.event.indexOf("scroll")&&a(c).bind(b.event,function(b){c.loaded||a(c).trigger("appear")})});a(b.container).trigger(b.event);return this};a.belowthefold=function(c,b){return(void 0===b.container||b.container===window?a(window).height()+a(window).scrollTop():a(b.container).offset().top+a(b.container).height())<=a(c).offset().top-b.threshold};a.rightoffold=function(c,b){return(void 0===b.container||
b.container===window?a(window).width()+a(window).scrollLeft():a(b.container).offset().left+a(b.container).width())<=a(c).offset().left-b.threshold};a.abovethetop=function(c,b){return(void 0===b.container||b.container===window?a(window).scrollTop():a(b.container).offset().top)>=a(c).offset().top+b.threshold+a(c).height()};a.leftofbegin=function(c,b){return(void 0===b.container||b.container===window?a(window).scrollLeft():a(b.container).offset().left)>=a(c).offset().left+b.threshold+a(c).width()};a.extend(a.expr[":"],
{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:window})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:window})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:window})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:window})}})}(jQuery));$(function(){$("img[data-original]").lazyload({threshold:200})});
(function(a,c){"undefined"!==typeof module&&module.exports?module.exports=c():"function"===typeof define&&define.amd?define(c):a.socialShare=c.call(a)})(this,function(){function a(c,e){if(c){if(!(this instanceof a))return new a(c,e);this.carrier=c;this.styles=e||b;this.shares=[];this.shareLink=this.carrier.getAttribute("data-link")||window.location.href;this.image=this.carrier.getAttribute("data-image")||"";this.desc=this.carrier.getAttribute("data-desc")||"";this.container=null;this.addStyle();this._initOrder();
return this}}var c={facebook:{link:"https://www.facebook.com/sharer/sharer.php?app_id\x3d418856551555971\x26u\x3d{{LINK}}",width:525,height:370,clsName:"facebook"},twitter:{link:"https://twitter.com/share?text\x3d{{LINK}}+{{DESC}}+%28via+%40madeinchina_b2b%29\x26url\x3d",width:520,height:440,clsName:"twitter"},pinterest:{link:"http://www.pinterest.com/pin/create/button/?url\x3d{{LINK}}\x26media\x3d{{IMAGE}}\x26description\x3d{{DESC}}",width:770,height:320,clsName:"pinterest"},linkedin:{link:"https://www.linkedin.com/cws/share?url\x3d{{LINK}}\x26token\x3d\x26isFramed\x3dtrue\x26lang\x3den_US",
width:520,height:460,clsName:"linkedin"},googleplus:{link:"https://plus.google.com/share?hl\x3den_US\x26url\x3d{{LINK}}",width:520,height:510,clsName:"googleplus"}},b=".sns-share{height:16px;font-size:12px;line-height:16px}.sns-share .title{margin-right:5px}.sns-share a{margin-right:7px;display:inline-block;background-image:url(http://www.made-in-china.com/images/sns-share.png);background-repeat:no-repeat;width:16px;height:16px;vertical-align:-2px}.sns-share .facebook{display:inline-block;width:16px;height:16px;background-position:0 0;}.sns-share .twitter{background-position:0 -32px}.sns-share .pinterest{background-position:0 -64px}.sns-share .linkedin{background-position:0 -96px}.sns-share .googleplus{width:26px;background-position:0 -128px}";
a.prototype.addStyle=function(){var a=document.createElement("style");a.type="text/css";a.media="all";a.styleSheet?a.styleSheet.cssText=this.styles:a.appendChild(document.createTextNode(this.styles));(document.getElementsByTagName("head")[0]||document.body).appendChild(a)};a.prototype.render=function(){if(this.carrier){var a=0,b=this,c=this.container=document.createElement("div");for(c.className="sns-share";this.shares[a];)c.appendChild(this._createItem(this.shares[a])),a++;this.carrier.parentNode.replaceChild(c,
this.carrier);document.attachEvent?c.attachEvent("onclick",function(a){a=a||window.event;b._clickHandle.call(b,a.srcElement);return!1}):c.addEventListener("click",function(a){b._clickHandle.call(b,a.target);a.preventDefault()},!1);return this}};a.prototype.add=function(a,b){if(a&&b&&!c.name)return c.name=b,this.shares.push(c.name),this};a.prototype._initOrder=function(){this.shares.length=0;this.shares.push(c.facebook);this.shares.push(c.twitter);this.image&&this.shares.push(c.pinterest);this.shares.push(c.linkedin);
this.shares.push(c.googleplus);return this};a.prototype.loadScript=function(a,b){var c=document.createElement("script");c.async=!0;c.src=a;c.type="text/javascript";window.attachEvent&&c.readyState?window.attachEvent("onreadystatechange",function(){if("loaded"===c.readyState||"complete"===c.readyState)c.onreadystatechange=null,b&&b()}):c.onload=function(){b&&b()};document.getElementsByTagName("head")[0].appendChild(c)};a.prototype._createItem=function(a){var b=document.createElement("a"),c=a.link,
c=c.replace("{{LINK}}",encodeURIComponent(this.shareLink)),c=c.replace("{{DESC}}",this.desc),c=c.replace("{{IMAGE}}",encodeURIComponent(this.image));b.href=c;b.rel="nofollow";b.className=a.clsName;b["data-width"]=a.width;b["data-height"]=a.height;return b};a.prototype._clickHandle=function(a){if("a"===a.nodeName.toLowerCase()){var b=a["data-width"]||560,c=a["data-height"]||420;window.open(a.href,"_blank","height\x3d"+c+",,innerHeight\x3d"+c+",width\x3d"+b+",innerWidth\x3d"+b+",top\x3d"+(window.screen.height-
30-c)/2+",left\x3d"+(window.screen.width-10-b)/2+",toolbar\x3dno,resizeable\x3dno,location\x3dno,status\x3dno")}};return a});
"undefined"!==typeof jQuery&&socialShare&&$(function(){var a=socialShare(document.getElementById("SNS"),".sns-share{margin-left: 20px;margin-right: 20px;display: inline-block;height:16px;font-size:12px;line-height:16px;}.sns-share .title{font:12px/1.5 Arial,sans-serif;float:left;margin:0;margin-right:5px;border:none; background:none;padding:0;}.sns-share a{vertical-align: middle; border-radius: 3px;margin-right:7px;display:inline-block;background-image:url(http://www.made-in-china.com/images/sns-share.png);background-repeat:no-repeat;width:16px;height:16px}.sns-share .facebook{display:inline-block;width:16px;height:16px;background-position:0 0;}.sns-share .twitter{background-position:0 -32px}.sns-share .pinterest{background-position:0 -64px}.sns-share .linkedin{background-position:0 -96px}.sns-share .googleplus{width:26px;background-position:0 -128px}"),c;
a&&(c=document.createElement("span"),c.className="title",c.innerHTML="Share|",a.render(),a.container.insertBefore(c,a.container.children[0]));if(a=socialShare(document.getElementById("slideshareSNS"),".sns-share{margin-top:15px;height:16px;font-size:12px;line-height:16px;}.sns-share .sns-title{color:#FFFFFF;font:12px/1.5 Arial,sans-serif;float:left;margin:0;margin-right:5px;border:none; background:none;padding:0;}.sns-share a{vertical-align: middle; border-radius: 3px;margin-right:7px;display:inline-block;background-image:url(http://www.made-in-china.com/images/sns-share.png);background-repeat:no-repeat;width:16px;height:16px}.sns-share .facebook{display:inline-block;width:16px;height:16px;background-position:0 0;}.sns-share .twitter{background-position:0 -32px}.sns-share .pinterest{background-position:0 -64px}.sns-share .linkedin{background-position:0 -96px}.sns-share .googleplus{width:26px;background-position:0 -128px}"))c=
document.createElement("span"),c.className="sns-title",c.innerHTML="Share|",a.render(),a.container.insertBefore(c,a.container.children[0])});
var statMonitor=function(a){var c=function(a){/^https?:\/\//i.test(a)||(a=window.location.protocol+"//"+window.location.host+(/^\//.test(a)?"":"/")+a);a=/(^https?:\/\/[^?#]*)(\?[^#]*)?(\#.*)?$/i.exec(a);return{action:a[1]||"",search:a[2]||"",hash:a[3]||""}},b=function(a){var b={};a.replace(/[?&]([^=]+)\=([^&]*)/g,function(a,c,d){b[c]=d});return b},f=function(a){return a&&"A"===a.tagName.toUpperCase()?!0:!1},e=function(d,e){d=c(d);var f=b(d.search);a.extend(!0,f,e);var g=[],h;for(h in f)g.push(h+"\x3d"+
f[h]);return d.action+"?"+g.join("\x26")},g=function(a){var b=!1,c=a.target||"_self";"A"===a.tagName.toUpperCase()&&"_self"===c&&(b=!0);return b},h=function(a){a.preventDefault()},d=function(){},k=function(a,b){a.onload=d;a.onerror=d;clearTimeout(b)},l=function(a,b,c,f){var g=-1;c="function"===typeof c?c:d;var h=new Image;h.onload=function(){k(h,g);c.call(h)};h.onerror=function(){k(h,g);c.call(h)};g=setTimeout(function(){k(h,g);c.call(h)},f||300);h.src=e(a,b)},m=function(a,b){var c=arguments.callee;
return f(a)?a:a===b?null:c(a.parentNode,b)},n={SYNC:function(d,e,g,k){a(f(d)?[d]:a(d).find("a").toArray()).click(h);a(d).click(function(d){var h=m(d.target,d.currentTarget);h&&l(e,g,function(){if(f(h))if(/function[\s\S]+?\[native\s+code\]/.test(h.click+"")){var d=a(h).clone(!1)[0];document.body.appendChild(d);d.click()}else if(d=document.createElement("form"),d.submit){var e=c(h.href),g=b(e.search);d.action=e.action;d.method="get";d.target=h.target||"_self";for(var k in g)e=document.createElement("input"),
e.type="hidden",e.name=k,e.value=g[k],d.appendChild(e);document.body.appendChild(d);d.submit&&d.submit()}},k)})},ASYNC:function(b,c,d){a(b).click(function(){l(c,d,null,1E5)})}};return function(b,c,d,e,f){"undefined"===typeof e?g:e;a(b).each(function(a,b){var g="function"===typeof e?e(b):!!e,h=("function"===typeof d?d(b,a):d)||{};n[g?"SYNC":"ASYNC"](b,c,h,f)})}}.call(this,window.jQuery);
void function(a,c){if(a&&c&&a(".J-data-stat").length){var b=a(".J-data-uid").val(),f=a(".J-data-pid").val(),e=a(".J-data-stat").map(function(a,b){var c=b.getAttribute("cz-id"),e=parseInt(b.getAttribute("cz-type"))||0,f=parseInt(b.getAttribute("cz-from"))||0;return{id:c,t:e,f:f}}).toArray();statMonitor(".J-data-stat","http://stat.made-in-china.com/event/rec.gif",function(g,h){var d={};d.pdid=f;d.list=e;d.action=g.getAttribute("cz-id");d.pos=a(g).parent().find(".J-data-stat").index(g);d={type:1,data:encodeURIComponent(c.stringify(d)),
st:(new Date).valueOf()};b&&(d.userid=b);return d},!0,300)}}.call(this,window.jQuery,window.JSON);void function(a,c){if(a&&c&&a(".J-mlan-stat").length&&a(".J-mlan-stat-data").length){var b=c.parse(a.trim(a(".J-mlan-stat-data").html()));statMonitor(".J-mlan-stat","http://stat.made-in-china.com/event/mlan.gif",function(c,e){return a.extend(!0,{},b,{mlan:encodeURIComponent(c.title)})},!1,300)}}.call(this,window.jQuery,window.JSON);
$(".searchProdsByKeyWord").click(function(){var a=$(this).attr("value");$("#keyWord4Search").val(a);$("#searchProdsByKeyword").submit()});$(function(){$(".more-info i.J-tip").mouseover(function(){$("div.J-tipContent").show()});$(".more-info i.J-tip").mouseout(function(){$("div.J-tipContent").hide()})});