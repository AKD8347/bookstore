import '../index.html'

import '../scss/styles.scss'

import './slider'
import './BookMenu'
import Book from './Book'
import BookMenu from "./BookMenu";
import api from './api'

let rootNode
let loadMoreNode
let inCartBadgeNode
let startIndex = 0
let selectedType = ''

function getPurchasedBooks() {
    return JSON.parse(localStorage.getItem('purchased')) || []
}

async function loadBooks() {
    const books = await api.getBooks(startIndex, selectedType)
    const purchasedBooks = getPurchasedBooks()

    if (purchasedBooks.length) {
        books.items.forEach(book => {
            if (purchasedBooks.includes(book.id)) {
                book.isPurchased = true
            }
        })
    }

    setInCartBadgeCount(purchasedBooks.length)

    startIndex += 6

    showOrHideLoadMoreBtn(books.items.length < books.totalItems)

    renderBooks(books)
}

function renderBooks(books) {
    books.items.forEach(bookItem => {
        new Book(bookItem, togglePurchasedBook, rootNode)
    })
}

async function selectMenuItemHandler(type) {
    rootNode.innerHTML = ''
    selectedType = type
    startIndex = 0
    loadBooks()
}

function showOrHideLoadMoreBtn(show) {
    if (show) {
        loadMoreNode.style.display = 'block'
    } else {
        loadMoreNode.style.display = 'none'
    }
}

async function togglePurchasedBook(book) {
    let purchasedBooks = getPurchasedBooks()
    if (book.isPurchased) {
        purchasedBooks.push(book.id)
    } else {
        purchasedBooks = purchasedBooks.filter(purchasedBookId => purchasedBookId !== book.id)
    }

    setInCartBadgeCount(purchasedBooks.length)

    localStorage.setItem('purchased', JSON.stringify(purchasedBooks))
}

function setInCartBadgeCount(count) {
    if (count) {
        inCartBadgeNode.innerText = count
        inCartBadgeNode.style.display = 'block'
    } else {
        inCartBadgeNode.innerText = ''
        inCartBadgeNode.style.display = 'none'
    }
}

window.addEventListener('DOMContentLoaded', () => {
    rootNode = document.querySelector('.books__grid')
    inCartBadgeNode = document.querySelector('.header__icon-badge')

    const bookMenu = new BookMenu(selectMenuItemHandler)

    loadMoreNode = document.querySelector('.books__loading .books__buy')
    loadMoreNode.addEventListener('click', loadBooks)
})
