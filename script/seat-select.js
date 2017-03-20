function displaySelect(event,ele){
	var table=ele.parent().find("table");
	if(event.type=="mouseenter"){
		table.show();
	}else{
		table.hide();
	}
}
function changeUseDay(event){
	var target=event.target;
	if(target.nodeName=="TD"){
		var useDayInput=$("#use_day");
		useDayInput.val($(target).html());
	}
}
$(document).ready(function(){
	/*显示预约天数和起始日期的下拉框*/
	var use_day=$("#info2").find(".input");
	var start_date=$("#info3").find(".input");
	var table=$("table");
	use_day.on("mouseenter",function(event){
		displaySelect(event,$(this));
	});
	use_day.on("mouseleave",function(event){
		displaySelect(event,$(this));
	});
	start_date.on("mouseenter",function(event){
		displaySelect(event,$(this));
	});
	start_date.on("mouseleave",function(event){
		displaySelect(event,$(this));
	});
	table.on("mouseenter",function(){
		$(this).show();
	});
	table.on("mouseleave",function(){
		$(this).hide();
	});
	//选择预约天数，并更改input的值
	var td=$(".use-day-select").find("td");
	td.on("click",changeUseDay);

});