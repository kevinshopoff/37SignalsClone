/*$(document).ready(function(){
	$('#leftbox').mouseenter(function(){
		$('h1').css("visibility", "hidden");
		$('#banner2').css("visibility", "hidden");
		$('#basecamptext').css("visibility", "visible");
	});
});

$(document).ready(function(){
	$('#leftbox').mouseleave(function(){
		$('h1').css("visibility", "visible");
		$('#banner2').css("visibility", "visible");
		$('#basecamptext').css("visibility", "hidden");
	});
});*/

$(document).ready(function(){
	$('#leftbox').mouseenter(function(){
		$('h1').css("display", "none");
		$('#banner2').css("display", "none");
		$('#basecamptext').css("display", "block");
		$('#leftboxarrow').css("display", "block");
	});
});

$(document).ready(function(){
	$('#leftbox').mouseleave(function(){
		$('h1').css("display", "block");
		$('#banner2').css("display", "block");
		$('#basecamptext').css("display", "none");
		$('#leftboxarrow').css("display", "none");
	});
});

$(document).ready(function(){
	$('#middlebox').mouseenter(function(){
		$('h1').css("display", "none");
		$('#banner2').css("display", "none");
		$('#highrisetext').css("display", "block");
		$('#middleboxarrow').css("display", "block");
	});
});

$(document).ready(function(){
	$('#middlebox').mouseleave(function(){
		$('h1').css("display", "block");
		$('#banner2').css("display", "block");
		$('#highrisetext').css("display", "none");
		$('#middleboxarrow').css("display", "none");
	});
});

$(document).ready(function(){
	$('#rightbox').mouseenter(function(){
		$('h1').css("display", "none");
		$('#banner2').css("display", "none");
		$('#campfiretext').css("display", "block");
		$('#rightboxarrow').css("display", "block");
	});
});

$(document).ready(function(){
	$('#rightbox').mouseleave(function(){
		$('h1').css("display", "block");
		$('#banner2').css("display", "block");
		$('#campfiretext').css("display", "none");
		$('#rightboxarrow').css("display", "none");
	});
});
	