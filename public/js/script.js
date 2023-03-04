$("button").click(function(event) {
	/* Act on the event */
	$timeout = setTimeout(function(){
		// alert(1);
		
	$.ajax({
		url: 'server.php',
		
		data: {param1: 'value1'},
	})
	.done(function($data) {
		// alert($data);
		$("#result").html($data);
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	}, 1000); // nghĩa là sau 1s alert(1) mới chay

	
});