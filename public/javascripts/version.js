
var GetVersion = function() {
	$('#DivVersion').animate({width: '535px'});
	$("#AddFormVersion").show();
	$("#FormVersion").show();
	
	$.ajax({type: 'GET',
			url: '/version'})
		.done(function(data){
			$("#Idversion").text(data.version);
			$("#listVersions").empty();
			$.each(data.file, function(index, value){
				var item = $("<li>Fichero: "+value.Name+"<br>MD5 "+value.md5.toUpperCase()+"</li>");
				item.appendTo($("#listVersions"));
			});
		});
}


function BuildVersionInfo(){
	
}