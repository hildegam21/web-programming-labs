let slideIndex = 0;
let playing = true;
let playButton = document.getElementById('play');

showSlides();

function showSlides() {
  if(playing) { 
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    timer = setTimeout(showSlides, 2000);
  }
}

function clickMe(button) {
    if(button.innerHTML == 'Пауза') {
        button.innerHTML = 'Пуск';
        clearInterval(timer);
    }
    else {
        button.innerHTML = 'Пауза';
        showSlides();
    }
}

