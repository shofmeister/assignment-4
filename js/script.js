

$(document).ready(function(){

	$("#first-read-more-text").hide();
	$("#second-read-more-text").hide();
	$(".read-less").hide();

	$("#first-read-more-button").click(readMore1);
	$("#second-read-more-button").click(readMore2);
	$("#first-read-less-button").click(readLess1);
	$("#second-read-less-button").click(readLess2);
	
	function readMore1(){
		$("#first-read-more-text, #first-read-less-button").slideDown();
		$("#first-read-more-button").hide();
		event.preventDefault();

	}

	function readMore2(){
		$("#second-read-more-text, #second-read-less-button").slideDown();
		$("#second-read-more-button").hide();
		event.preventDefault();

	}

	function readLess1(){
		$("#first-read-more-text").slideUp();
		$("#first-read-more-button").show();
		$("#first-read-less-button").hide();
		event.preventDefault();

	}

	function readLess2(){
		$("#second-read-more-text").slideUp();
		$("#second-read-more-button").show();
		$("#second-read-less-button").hide();
		event.preventDefault();

	}
 

});

