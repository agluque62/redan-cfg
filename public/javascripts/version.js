/**
 * Created by vjmolina on 2/3/17.
 */


var GetVersion = function() {
	$('#DivVersion').animate({width: '535px'});
	$("#AddFormVersion").show();
	$("#FormVersion").show();
	
	for(var i=0; i<5; i++){
		var item = $("<li>Fichero: MD5</li>");
		item.appendTo($("#listVersions"));
	}
	
}


function BuildVersionInfo(){
	
}