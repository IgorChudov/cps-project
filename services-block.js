let button = document.querySelector('.button__close--open');
let cards = document.querySelectorAll('.card');

button.addEventListener('click', function () {
    if (this.innerHTML === "Показать все") {
        this.innerHTML = "Скрыть";
        button.classList.add('button__close--open--clicked');
        for (let i = 8; i < cards.length; i++) {
            cards[i].classList.remove('card-hide');
        }
    } else {
        this.innerHTML = "Показать все";
        button.classList.remove('button__close--open--clicked');
        for (let i = 8; i < cards.length; i++) {
            cards[i].classList.add('card-hide');
        }
    }
});

let buttonPad = document.querySelector('.pad-btn');
let pad = document.querySelector('.pad-cards');
let cardsPad = pad.querySelectorAll('.card');

buttonPad.addEventListener('click', function () {
    if (this.innerHTML === "Показать все") {
        this.innerHTML = "Скрыть";
        buttonPad.classList.add('button__close--open--clicked');
        for (let i = 6; i < cardsPad.length; i++) {
            cardsPad[i].classList.remove('card-hide');
        }
    } else {
        this.innerHTML = "Показать все";
        buttonPad.classList.remove('button__close--open--clicked');
        for (let i = 6; i < cardsPad.length; i++) {
            cardsPad[i].classList.add('card-hide');
        }
    }
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    freeMode: true,
    loop: true,

    slidesPerView: 3,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});