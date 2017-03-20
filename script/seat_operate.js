function selectPage(event){
	var reg=new RegExp("\\d");
	var selected_class=$(".page-select").find(".selected");
	var lid="#content"+selected_class.attr("id").match(reg)[0];
	if(!$(this).hasClass("selected")){
		$(this).addClass("selected");
		selected_class.removeClass("selected");
		var cid="#content"+$(this).attr("id").match(reg)[0];
		$(lid).hide();
		$(cid).show();
	}
}
$(document).ready(function(){
	var pages=$(".page-select").find(".page");
	pages.on("click",selectPage);
});