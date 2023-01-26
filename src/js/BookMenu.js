export default class BookMenu {
    constructor(onSelectMenuItem) {
        const booksTrigger = document.querySelector('.books__mobile');
        const booksMenu = document.querySelector('.books__menu');
        this.menuItems = document.querySelectorAll('.books__menu a')

        onSelectMenuItem(this.menuItems[0].dataset.type)

        booksTrigger.addEventListener('click', (e) => {
            booksTrigger.classList.toggle("books__mobile--active");
            booksMenu.classList.toggle("books__menu--show");
            e.preventDefault()
        })

        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()

                this.#toggleActiveMenuItem(e.target)
                onSelectMenuItem(e.target.dataset.type)
            })
        })
    }

    #toggleActiveMenuItem(newActiveItem) {
        const activeItem = Array.from(this.menuItems).find(item => item.className.includes('active'))
        activeItem.classList.remove('active')

        newActiveItem.classList.add('active')
    }

}
