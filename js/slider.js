function showSlider (options) {

    let sliderContainer = document.querySelector('.slider__wrapper');
    let images = document.querySelectorAll('.slider__item');
    let dots = document.querySelector('.slider__dots');

    options = options || {
        autoplay: false,
        dots: true,
        interval: 0
    }

    initImages();
    if (options.dots) {
        initDots()
    }

    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {

        if(!images) {
            return;
        }

        images.forEach((img, index) => {
            img.setAttribute('data-index', index);
            img.classList.add('number-' + index);
            if (index === 0) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        })
    }

    function initDots() {
        if(!images) {
            return;
        }

        images.forEach((img, index) => {
            let dot = `<li class="slider__dots--item number-${index} ${index === 0? 'active': ''}" data-index="${index}"></li>`;
            dots.innerHTML += dot;

        })

        dots.querySelectorAll('.slider__dots--item').forEach(dot =>  {
            dot.addEventListener('click', function (){
                runSlider(this.dataset.index)
            });
        })
    }

    function runSlider(number) {
        sliderContainer.querySelector('.active').classList.remove('active');
        sliderContainer.querySelector('.number-' + number).classList.add('active');

        if(options.dots) {
            dots.querySelector('.active').classList.remove('active');
            dots.querySelector('.number-' + number).classList.add('active');
        }
    }

    function initAutoplay() {
        setInterval(() => {
            let activeSlide = +sliderContainer.querySelector(".active").dataset.index;
            let nextSlide;
            if(activeSlide === images.length - 1) {
                nextSlide = 0
            } else {
                nextSlide = activeSlide + 1;
            }
            runSlider(nextSlide);
        }, options.interval);
    }
}

let sliderOptions = {
    autoplay: true,
    dots: true,
    interval: 5000
}


document.addEventListener("DOMContentLoaded", function(){
    showSlider(sliderOptions);
});
