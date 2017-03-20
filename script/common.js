function navAnimation(event){
	var target=event.target,
		reg=new RegExp("\\d\+"),
		triangle=$(".nav-list").find(".triangle");
	if(target.nodeName=="A"){
		var item_info=$(target).find(".item-info"),
			cid=$(target).attr("id").match(reg)[0],
			tarLength=$(target).css("width").match(reg)[0],
			_left=tarLength*(cid-1)+Math.floor(tarLength/2)-10+"px";
		triangle.css("left",_left);
		if(event.type=="mouseenter"){
			item_info.hide();
		}else{
			item_info.show();
		}
	}
}
function triangleAnimation(event){
	var triangle=$(".nav-list").find(".triangle"),
		reg=new RegExp("\\d\+"),
		tarLength=$("#nav-item2").css("width").match(reg)[0],
		target=event.target;
	if(target.nodeName=="A"){
		var _html=document.location.href.split("/"),
			cur=_html[_html.length-1],
			htmls=$(".nav-item"),
			tIndex=0;
		htmls.each(function(index){
			var reg1=new RegExp("\\s|^"+cur+"$|\\s");
			if(reg1.test($(this).attr("href"))){
				tIndex=index;
				return false;
			}
		});
		var _left=tarLength*tIndex+Math.floor(tarLength/2)-10+"px";
	}
	triangle.css("left",_left);
}
$(document).ready(function(){
	var nav_items=$(".nav-item");
	nav_items.on("mouseenter",navAnimation);
	nav_items.on("mouseleave",navAnimation);
	$("input").val("");
	var nav_list=$(".nav-list");
	nav_list.on("mouseleave",triangleAnimation);
});