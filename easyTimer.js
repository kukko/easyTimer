function loadJQ(src, callback){
	if (!window.jQuery){
		var jQ=document.createElement("script");
		jQ.src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
		jQ.async=true;
		jQ.onreadystatechange=jQ.onload=function(){
			var state=jQ.readyState;
			if (!callback.done && (!state || /loaded|complete/.test(state))){
				callback.done=true;
				callback();
			}
		}
		document.getElementsByTagName("head")[0].appendChild(jQ);
	}
	else{
		callback.done=true;
		callback();
	}
}
function easyTimer(){
	return $.fn.jquery;
}
loadJQ("ASD", function(){
	console.log(easyTimer());
});