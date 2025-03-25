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

