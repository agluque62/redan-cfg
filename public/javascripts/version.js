
var GetVersion = function() {
	$('#DivVersion').animate({width: '535px'});
	$("#AddFormVersion").show();
	$("#FormVersion").show();
	
	$.ajax({type: 'GET',
			url: '/version'})
		.done(function(data){
			$("#IdVersion").text(data.version);
			$("#IdSubVersion").text(data.subversion);
			$("#IdVersionDate").text(data.date);
			$("#listVersions").empty();
			
			$.each(data.file, function(index, value){
				var item = $("<br>Fichero: "+value.Name+"<ul><li>MD5: "+value.md5.toUpperCase()+"</li>" +
					"<li>Tamaño: "+value.fileSizeInBytes+" bytes</li></ul>");
				
				item.appendTo($("#listVersions"));
			});
		});
}


function BuildVersionInfo(){
	
}