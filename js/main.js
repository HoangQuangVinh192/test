$(document).ready(function(){
	main();
});

function main(){
	$('.drop-menu > li').click(function(){
		if($(this).hasClass('active')){
			$(this).children('.sub-menu').slideUp();
			$(this).removeClass('active');
			// alert('Ok');
		}else{
			$(this).children('.sub-menu').slideDown();
			$(this).addClass('active');
		}
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>=400){
			$('.go-to-top').fadeIn();
			// $('#nav').fadeIn();
		}else{
			$('.go-to-top').fadeOut();
			// $('#nav').fadeOut();
		}
	});

	$('.go-to-top').click(function(){
		$('html, body').animate({ scrollTop: 0});
	});

	var bigImg = document.getElementById('big-img');
	var subImg = document.getElementById('sub-img').getElementsByTagName('img');

	for (var i = 0; i < subImg.length; i++) {
		subImg[i].addEventListener('click', function(){
			var imgSrc = this.getAttribute('src');
			bigImg.innerHTML = "<img src ="+ imgSrc+">";
		});
	}

	var pos = $(".khung").position();

	$(window).scroll(function(){
		var posScroll = $(document).scrollTop();
		if(parseInt(posScroll) > parseInt(pos.top) ){
			$(".khung").addClass('fixed')
		}else{
			$(".khung").removeClass('fixed')
		}
	});
}