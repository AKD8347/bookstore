const booksTrigger = document.querySelector('.books__mobile');
const booksMenu = document.querySelector('.books__menu');

booksTrigger.addEventListener('click', function () {
    event.preventDefault();
    booksTrigger.classList.toggle("books__mobile--active");
    booksMenu.classList.toggle("books__menu--show");
});
