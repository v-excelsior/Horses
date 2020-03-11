function closeHeader(){
    document.getElementById('header').style.display = "none";
}

$(document).ready(function(){
	$('.single-item').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 7000,
		arrows: true,
		prevArrow:'<img class="right-arrow" src="img/icon/left-arrow.svg" alt="left-arrow" width="30px">',
		nextArrow:'<img class="right-arrow" src="img/icon/right-arrow.svg" alt="right-arrow" width="30px">'
	});
});
