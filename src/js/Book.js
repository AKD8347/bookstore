export default class Book {
    #node
    #buyNode

    constructor(bookData, purchaseHandler, rootNode) {
        this.rootNode = rootNode
        this.id = bookData.id
        this.bookImage = bookData.volumeInfo.imageLinks?.thumbnail || require('@/img/books/default-book.png')
        this.authors = bookData.volumeInfo.authors
        this.title = bookData.volumeInfo.title
        this.description = bookData.volumeInfo.description || ''
        this.price = bookData.saleInfo.retailPrice?.amount
        this.currency = bookData.saleInfo.retailPrice?.currencyCode
        this.ratingsCount = bookData.volumeInfo.ratingsCount
        this.averageRating = bookData.volumeInfo.averageRating
        this.isPurchased = bookData.isPurchased

        this.purchaseHandler = purchaseHandler

        this.render()

        this.#setByListener()
    }

    #getCurrencyIcon() {
        if (this.currency === 'RUB') {
            return '₽'
        }

        if (this.currency === 'USD') {
            return '$'
        }

        return this.currency || ''
    }

    #getRatingsCountString() {
        return this.ratingsCount ? `${this.ratingsCount} review` : ''
    }

    #getPurchasedText() {
        return this.isPurchased ? 'In the cart' : 'Buy now'
    }

    #setPurchasedText() {
        this.#buyNode.innerText = this.#getPurchasedText()
    }

    #renderStars() {
        const starsWrapper = this.#node.querySelector('.books__rating--stars')
        const floorRating = Math.floor(+this.averageRating)
        for (let i = 1; i <= 5; ++i) {
            const fill = i <= floorRating ? '#F2C94C' : '#EEEDF5'
            const svg = `
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z" fill="${fill}"/>
                        </svg>
            `

            starsWrapper.innerHTML += svg
        }
    }

    #setByListener() {
        this.#buyNode = this.#node.querySelector('.books__buy')
        this.#buyNode.addEventListener('click', () => {
            this.isPurchased = !this.isPurchased
            this.#setPurchasedText()

            this.purchaseHandler(this)
        })
    }

    render() {
        this.#node = document.createElement('div')
        this.#node.classList.add('books__element')
        this.#node.innerHTML = `
                <a href="#" class="books__img">
                    <img src="${this.bookImage}" alt="book">
                </a>
                <div class="books__info">
                    <p class="books__author">${this.authors ? this.authors.join(', ') : ''}</p>
                    <h3 class="books__title">${this.title}</h3>
                    ${this.averageRating ? `
                        <div class="books__rating">
                            <div class="books__rating--stars"></div>
                            <span class="books__rating--review">${this.#getRatingsCountString()}</span>
                        </div>` : ''
        }
                    ${this.description ? `
                        <p class="books__about">${this.description}</p>
                    ` : ''
        }
                    ${this.price ? `
                        <p class="books__price">${this.#getCurrencyIcon()}${this.price}</p>
                    ` : ''
        }

                    <button class="books__buy">${this.#getPurchasedText()}</button>
                </div>
            `

        if (this.averageRating) {
            this.#renderStars()
        }

        this.rootNode.appendChild(this.#node)
    }
}