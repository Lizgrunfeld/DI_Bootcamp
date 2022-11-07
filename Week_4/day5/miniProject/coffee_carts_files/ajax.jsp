
(function(){
	var vgnScripts = [];

	
	if (typeof window.JSON === 'undefined') {
		vgnScripts.push("/sites/scripts/json/json.min.js");
	}

	
	if ( typeof window.vQuery === 'undefined' ) {
		vgnScripts.push("/sites/scripts/vquery/vquery.min.js");
	}
	vgnScripts.push("/sites/scripts/async/ajaxlib.js");

	
	if (typeof window.OT === 'undefined' || typeof window.OT.wem === 'undefined') {
		vgnScripts.push("/sites/scripts/async/wem-ajax-min.js");
	}

	
	if (typeof window.OT === 'undefined' || typeof window.OT.wem === 'undefined' || typeof window.OT.wem.messaging === 'undefined') {
		vgnScripts.push("/sites/scripts/messaging/wem-messaging-min.js");
	}

	var vgnScriptBlock = "";
	for ( var i=0; i < vgnScripts.length; ++i ) {
		var vgnScript = vgnScripts[i];
		vgnScriptBlock += "<script type='text/javascript' src='" + vgnScript + "'></script>";
	}
	
	
	vgnScriptBlock += "<script type='text/javascript' src='/sites/scripts/vcm32266.js'></script>";
	document.write(vgnScriptBlock);
})();
