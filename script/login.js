function tabForward(event){
	var target=event.target;
	if(target.value.length==target.maxLength){
		var form=target.form;
		for(var i=0;i<form.elements.length;i++){
			if(form.elements[i]==target){
				if(form.elements[i+1]){
					form.elements[i+1].focus();
				}
				return;
			}
		}
	}
}
$(document).ready(function(){
	var login_num=$("#login_num");
	login_num.val("");
	login_num.on("keyup",tabForward);
});