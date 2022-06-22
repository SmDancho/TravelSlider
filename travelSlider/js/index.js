const btnLeft = document.querySelector('.slider__item_left');
const btnRight = document.querySelector('.slider__item_right');
const itemActive = document.querySelector('.slider__item_active');
const sliderItem = document.querySelector('.slider__item');
const sliderTrack = document.querySelector('.slider__inner');
const span = document.querySelectorAll('.span');


function moveLeft () {
    sliderTrack.classList.add('transition-left');
    
}

function moveRight () {
    sliderTrack.classList.add('transition-right');       
}

btnRight.addEventListener('click', moveRight);
btnLeft.addEventListener('click', moveLeft);



const createMiddle = document.createElement('div');
createMiddle.classList.add('slider__card');
createMiddle.innerHTML = `
    <div class="slider__card">
    <img src="img/middleImg.svg" alt="">
                        </div>'
`;

const createright = document.createElement('div');
createright.classList.add('slider__card');
createright.innerHTML = `
    <div class="slider__card">
    <img src="img/rightImg.svg" alt="">
                        </div>'
`;

const createleft= document.createElement('div');
createleft.classList.add('slider__card');
createleft.innerHTML = `
    <div class="slider__card">
    <img src="img/leftImg.svg" alt="">
                        </div>'
`;


sliderTrack.addEventListener('animationend' , (animationEvent) => {
   
    if (animationEvent.animationName === 'moveLeft'  && span[1].classList.contains('span_active')) {
        itemActive.innerHTML = btnLeft.innerHTML;
        btnRight.innerHTML = createMiddle.innerHTML;
        btnLeft.innerHTML = createright.innerHTML;
        span[1].classList.remove('span_active');
        span[0].classList.add('span_active');

       
       
        

    }

    else if (animationEvent.animationName === 'moveRight' && span[1].classList.contains('span_active')) {
        itemActive.innerHTML  = btnRight.innerHTML;
        btnLeft.innerHTML = createMiddle.innerHTML;
        btnRight.innerHTML = createleft.innerHTML;
        span[1].classList.remove('span_active');
        span[2].classList.add('span_active');

       
        
       
    }

    else if (animationEvent.animationName === 'moveLeft' && span[2].classList.contains('span_active') ) {
        itemActive.innerHTML = createMiddle.innerHTML;
        btnRight.innerHTML = createright.innerHTML;
        btnLeft.innerHTML  = createleft.innerHTML;
        span[2].classList.remove('span_active');
        span[0].classList.remove('span_active');
        span[1].classList.add('span_active');
        
        
      
       
    }
    else {
        itemActive.innerHTML = createMiddle.innerHTML;
        btnRight.innerHTML = createright.innerHTML;
        btnLeft.innerHTML  = createleft.innerHTML;
        span[0].classList.remove('span_active');
        span[2].classList.remove('span_active');
        span[1].classList.add('span_active');
    }
   
    sliderTrack.classList.remove('transition-left');
    sliderTrack.classList.remove('transition-right');
    
    checkPignitation();
   

});

function checkPignitation () {
    if(span[0].classList.contains('span_active')){
        btnLeft.removeEventListener('click', moveLeft);
        btnLeft.textContent= '';
    }else if (span[1].classList.contains('span_active')) {
        btnLeft.addEventListener('click', moveLeft);
        btnRight.addEventListener('click', moveRight);
    }else if (span[2].classList.contains('span_active')) {
        btnRight.removeEventListener('click', moveRight);
        btnRight.textContent = '';
       
    }
}



