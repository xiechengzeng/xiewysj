
		$(document).ready(function(){
		//Larger thumbnail preview 
		$("ul.thumb li").hover(function() {
		$(this).css({'z-index' : '10'});
		$(this).find('img').addClass("hover").stop()
//		悬停变大
		.animate({
			marginTop: '-110px', 
			marginLeft: '-110px', 
			top: '50%', 
			left: '50%', 
			width: '500%', 
			height: '500px',
			padding: '0px' 
		}, 200);} , 
		function() {
		$(this).css({'z-index' : '0'});
		$(this).find('img').removeClass("hover").stop()
//		鼠标移开缩小
		.animate({
			marginTop: '0px', 
			marginLeft: '0px',
			top: '0px', 
			left: '0px', 
			width: '322%', 
			height: '250px', 
			padding: '0px'
		}, 400);
		});
		//Swap Image on Click
		$("ul.thumb li a").click(function() {
		var mainImage = $(this).attr("href"); //Find Image Name
		$("#main_view img").attr({ src: mainImage });
		return false;		
		});
		});
	