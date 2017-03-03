
var GetVersion = function() {
	$('#DivVersion').animate({width: '535px'});
	$("#AddFormVersion").show();
	$("#FormVersion").show();
	
	$.ajax({type: 'GET',
			url: '/version'})
		.done(function(data){
			$("#listVersions").empty();
			for(var i=0; i<2; i++){
				var item = $("<li>Fichero: "+data.files[i].Name+"  MD5 "+data.version+"</li>");
				item.appendTo($("#listVersions"));
			}
		});
}


function BuildVersionInfo(){
	
}