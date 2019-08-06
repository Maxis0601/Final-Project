
var slides = document.querySelectorAll('#slides .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slider__item';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slider__item showing';
}


var playing = true;
var pauseButton = document.getElementById('pause');

function pause(){
    pauseButton.innerHTML = '&#9658;'; // play character
    playing = false;
    clearInterval(slideInterval);
}

function play(){
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
    if(playing){ pause(); }
    else{ play(); }
};

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pause();
    nextSlide();
};
previous.onclick = function(){
    pause();
    previousSlide();
};



