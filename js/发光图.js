
$(document).ready(function(){
	var b = $("#solutionList li");
	b.mouseover(function() {
		var e = $(this);
		b.removeClass("active");
		e.addClass("active")
	});
});

