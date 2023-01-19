//Функция слайдера
function showSlider (options) {
    //Находим контейнер со слайдами
    let sliderContainer = document.querySelector('.slider__wrapper');
    //Находим все слайды
    let images = document.querySelectorAll('.slider__item');
    //Находим контейнер для точек
    let dots = document.querySelector('.slider__dots');

    //добавляем опции по умолчанию
    options = options || {
        autoplay: false,
        dots: true,
        interval: 0
    }

    //Функция инициализвции картинок
    initImages();
    //Функция инициализвции точек
    if (options.dots) {
        initDots()
    }
    //Функция инициализвции автопрокрутки
    if (options.autoplay) {
        initAutoplay();
    }

    function initImages() {
        //при отсутсвии картинок выходим из функции
        if(!images) {
            return;
        }
        //при наличии проходим по каждому элементу
        images.forEach((img, index) => {
            //добавляем элементу атрибут data-index с индексом элемента
            img.setAttribute('data-index', index);
            //добавляем элементу класс с с индексом элемента
            img.classList.add('number-' + index);
            //если элемент первый в списке
            if (index === 0) {
                //добавляем ему уктивный класс
                img.classList.add('active');
            } else {
                //если нет - убираем уктивный класс
                img.classList.remove('active');
            }
        })
    }

    function initDots() {
        //при отсутсвии картинок выходим из функции
        if(!images) {
            return;
        }
        //при наличии проходим по каждому элементу
        images.forEach((img, index) => {
            //создаем верстку точки, и добавляем активный класс первой точке
            let dot = `<li class="slider__dots--item number-${index} ${index === 0? 'active': ''}" data-index="${index}"></li>`;
            //добавляем верстку в контейнер
            dots.innerHTML += dot;

        })
        //добавляем точкам функцию клика
        dots.querySelectorAll('.slider__dots--item').forEach(dot =>  {
            dot.addEventListener('click', function (){
                //передаем в функцию слайдера индекс точки, по которой отработало собитые click
                runSlider(this.dataset.index)
            });
        })
    }

    function runSlider(number) {
        //убираем у всех изображений активный класс
        sliderContainer.querySelector('.active').classList.remove('active');
        //добавляем активный класс нужному изображению
        sliderContainer.querySelector('.number-' + number).classList.add('active');

        if(options.dots) {
            //убираем у всех точек активный класс
            dots.querySelector('.active').classList.remove('active');
            //добавляем активный класс нужной точке
            dots.querySelector('.number-' + number).classList.add('active');
        }
    }

    function initAutoplay() {
        //задаем интерсал, который передаем из options
        setInterval(() => {
            //определяем активный слайд
            let activeSlide = +sliderContainer.querySelector(".active").dataset.index;
            //определяем переменную для следующего слайда
            let nextSlide;
            if(activeSlide === images.length - 1) {
                //если активный слайд последний - переключаемся на первый
                nextSlide = 0
            } else {
                //и наоборот
                nextSlide = activeSlide + 1;
            }
            runSlider(nextSlide);
        }, options.interval);
    }
}

//Задем опции для слайдера
let sliderOptions = {
    autoplay: true,
    dots: true,
    interval: 5000
}

//при загрузке всех элементов страницы инициализируем слайдер
document.addEventListener("DOMContentLoaded", function(){
    showSlider(sliderOptions);
});


