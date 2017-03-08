
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
			$("#listFileNames").empty();
			$("#listMd5").empty();
			
			$.each(data.file, function(index, value){
				var itemName = $("<td align='center' style='font-size:10px;font-weight:bold'>"+value.Name+
					"</td>");
				var itemMd5 = $("<td align='center'>"+value.md5.toUpperCase()+"</td>");
				var item = $("<tr><td align='center' style='font-size:10px;font-weight:bold'>"+value.Name+
					"</td><td align='center'>"+value.md5.toUpperCase()+"</td></tr>");
				itemName.appendTo($("#listFileNames"));
				itemMd5.appendTo($("#listMd5"));
				item.appendTo($("#listVersions"));
			});
		});
}


function BuildVersionInfo(){
	
}