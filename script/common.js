function navAnimation(event,tIndex){
	var target=event.target,
		reg=new RegExp("\\d\+"),
		triangle=$(".nav-list").find(".triangle");
	if(target.nodeName=="A"){
		var item_info=$(target).find(".item-info"),
			cid=$(target).attr("id").match(reg)[0],
			tarLength=$(target).css("width").match(reg)[0],
			_left=tarLength*(cid-1)+Math.floor(tarLength/2)-10+"px";
		triangle.css("left",_left);
		if(cid-1!=tIndex){
			if(event.type=="mouseenter"){
				item_info.hide();
			}else{
				item_info.show();
			}
		}
	}
}
function triangleAnimation(event,tIndex){
	var triangle=$(".nav-list").find(".triangle"),
		reg=new RegExp("\\d\+"),
		tarLength=$("#nav-item2").css("width").match(reg)[0],
		target=event.target;
	if(target.nodeName=="A"){
		var _left=tarLength*tIndex+Math.floor(tarLength/2)-10+"px";
	}
	triangle.css("left",_left);
}
$(document).ready(function(){
	//获取到目前处于哪个页面，从而获取到该页面处于导航栏的下标值tIndex
	var _html=document.location.href.split("/"),
		curHtml=_html[_html.length-1],
		htmls=$(".nav-item"),
		tIndex=0;
	htmls.each(function(index){
		var reg1=new RegExp("\\s|^"+curHtml+"$|\\s");
		if(reg1.test($(this).attr("href"))){
			tIndex=index;
			return false;
		}
	});
	var nav_items=$(".nav-item");
	nav_items.on("mouseenter",function(event){
		navAnimation(event,tIndex);
	});
	nav_items.on("mouseleave",function(event){
		navAnimation(event,tIndex);
	});
	$("input").val("");
	var nav_list=$(".nav-list");
	nav_list.on("mouseleave",function(event){
		triangleAnimation(event,tIndex);
	});
});