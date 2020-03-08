function closeHeader(){
    document.getElementById('header').style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex+=n);
}

function currentSlide(n) {
	showSlides(slideIndex = n)
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("slide");
	
	if( n > slides.length){
		slideIndex = 1;
	}
	if( n < 1 ){
		slideIndex = slides.length;
	}
	for ( i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "flex"; 
}