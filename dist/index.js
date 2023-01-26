/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
        /*!*********************************************************!*\
          !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
          \*********************************************************/
        /***/ ((module) => {

            "use strict";
            eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/html-loader/dist/runtime/getUrl.js?");

            /***/
        }),

        /***/ "./src/js/Book.js":
        /*!************************!*\
          !*** ./src/js/Book.js ***!
          \************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\n  #node;\n  #buyNode;\n  constructor(bookData, purchaseHandler, rootNode) {\n    this.rootNode = rootNode;\n    this.id = bookData.id;\n    this.bookImage = bookData.volumeInfo.imageLinks?.thumbnail || __webpack_require__(/*! @/img/books/default-book.png */ \"./src/img/books/default-book.png\");\n    this.authors = bookData.volumeInfo.authors;\n    this.title = bookData.volumeInfo.title;\n    this.description = bookData.volumeInfo.description || '';\n    this.price = bookData.saleInfo.retailPrice?.amount;\n    this.currency = bookData.saleInfo.retailPrice?.currencyCode;\n    this.ratingsCount = bookData.volumeInfo.ratingsCount;\n    this.averageRating = bookData.volumeInfo.averageRating;\n    this.isPurchased = bookData.isPurchased;\n    this.purchaseHandler = purchaseHandler;\n    this.render();\n    this.#setByListener();\n  }\n  #getCurrencyIcon() {\n    if (this.currency === 'RUB') {\n      return '₽';\n    }\n    if (this.currency === 'USD') {\n      return '$';\n    }\n    return this.currency || '';\n  }\n  #getRatingsCountString() {\n    return this.ratingsCount ? `${this.ratingsCount} review` : '';\n  }\n  #getPurchasedText() {\n    return this.isPurchased ? 'In the cart' : 'Buy now';\n  }\n  #setPurchasedText() {\n    this.#buyNode.innerText = this.#getPurchasedText();\n  }\n  #renderStars() {\n    const starsWrapper = this.#node.querySelector('.books__rating--stars');\n    const floorRating = Math.floor(+this.averageRating);\n    for (let i = 1; i <= 5; ++i) {\n      const fill = i <= floorRating ? '#F2C94C' : '#EEEDF5';\n      const svg = `\n                        <svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                            <path d=\"M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z\" fill=\"${fill}\"/>\n                        </svg>\n            `;\n      starsWrapper.innerHTML += svg;\n    }\n  }\n  #setByListener() {\n    this.#buyNode = this.#node.querySelector('.books__buy');\n    this.#buyNode.addEventListener('click', () => {\n      this.isPurchased = !this.isPurchased;\n      this.#setPurchasedText();\n      this.purchaseHandler(this);\n    });\n  }\n  render() {\n    this.#node = document.createElement('div');\n    this.#node.classList.add('books__element');\n    this.#node.innerHTML = `\n                <a href=\"#\" class=\"books__img\">\n                    <img src=\"${this.bookImage}\" alt=\"book\">\n                </a>\n                <div class=\"books__info\">\n                    <p class=\"books__author\">${this.authors ? this.authors.join(', ') : ''}</p>\n                    <h3 class=\"books__title\">${this.title}</h3>\n                    ${this.averageRating ? `\n                        <div class=\"books__rating\">\n                            <div class=\"books__rating--stars\"></div>\n                            <span class=\"books__rating--review\">${this.#getRatingsCountString()}</span>\n                        </div>` : ''}\n                    ${this.description ? `\n                        <p class=\"books__about\">${this.description}</p>\n                    ` : ''}\n                    ${this.price ? `\n                        <p class=\"books__price\">${this.#getCurrencyIcon()}${this.price}</p>\n                    ` : ''}\n\n                    <button class=\"books__buy\">${this.#getPurchasedText()}</button>\n                </div>\n            `;\n    if (this.averageRating) {\n      this.#renderStars();\n    }\n    this.rootNode.appendChild(this.#node);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/Book.js?");

            /***/
        }),

        /***/ "./src/js/BookMenu.js":
        /*!****************************!*\
          !*** ./src/js/BookMenu.js ***!
          \****************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookMenu)\n/* harmony export */ });\nclass BookMenu {\n  constructor(onSelectMenuItem) {\n    const booksTrigger = document.querySelector('.books__mobile');\n    const booksMenu = document.querySelector('.books__menu');\n    this.menuItems = document.querySelectorAll('.books__menu a');\n    onSelectMenuItem(this.menuItems[0].dataset.type);\n    booksTrigger.addEventListener('click', e => {\n      booksTrigger.classList.toggle(\"books__mobile--active\");\n      booksMenu.classList.toggle(\"books__menu--show\");\n      e.preventDefault();\n    });\n    this.menuItems.forEach(item => {\n      item.addEventListener('click', e => {\n        e.preventDefault();\n        this.#toggleActiveMenuItem(e.target);\n        onSelectMenuItem(e.target.dataset.type);\n      });\n    });\n  }\n  #toggleActiveMenuItem(newActiveItem) {\n    const activeItem = Array.from(this.menuItems).find(item => item.className.includes('active'));\n    activeItem.classList.remove('active');\n    newActiveItem.classList.add('active');\n  }\n}\n\n//# sourceURL=webpack:///./src/js/BookMenu.js?");

            /***/
        }),

        /***/ "./src/js/api.js":
        /*!***********************!*\
          !*** ./src/js/api.js ***!
          \***********************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = 'AIzaSyCmyzmrtCsScrz5Ev1K6XaF0K9KlVt-Wl8';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getBooks(startIndex, type) {\n    const url = new URL('https://www.googleapis.com/books/v1/volumes?printType=books&langRestrict=en');\n    url.searchParams.append('key', API_KEY);\n    url.searchParams.append('q', `\"${type}\"`);\n    url.searchParams.append('startIndex', startIndex);\n    url.searchParams.append('maxResults', 6);\n    return fetch(url).then(response => response.json());\n  }\n});\n\n//# sourceURL=webpack:///./src/js/api.js?");

            /***/
        }),

        /***/ "./src/js/index.js":
        /*!*************************!*\
          !*** ./src/js/index.js ***!
          \*************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./src/index.html\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/js/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BookMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookMenu */ \"./src/js/BookMenu.js\");\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Book */ \"./src/js/Book.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n\n\n\n\n\n\n\nlet rootNode;\nlet loadMoreNode;\nlet inCartBadgeNode;\nlet startIndex = 0;\nlet selectedType = '';\nfunction getPurchasedBooks() {\n  return JSON.parse(localStorage.getItem('purchased')) || [];\n}\nasync function loadBooks() {\n  const books = await _api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getBooks(startIndex, selectedType);\n  const purchasedBooks = getPurchasedBooks();\n  if (purchasedBooks.length) {\n    books.items.forEach(book => {\n      if (purchasedBooks.includes(book.id)) {\n        book.isPurchased = true;\n      }\n    });\n  }\n  setInCartBadgeCount(purchasedBooks.length);\n  startIndex += 6;\n  showOrHideLoadMoreBtn(books.items.length < books.totalItems);\n  renderBooks(books);\n}\nfunction renderBooks(books) {\n  books.items.forEach(bookItem => {\n    new _Book__WEBPACK_IMPORTED_MODULE_4__[\"default\"](bookItem, togglePurchasedBook, rootNode);\n  });\n}\nasync function selectMenuItemHandler(type) {\n  rootNode.innerHTML = '';\n  selectedType = type;\n  startIndex = 0;\n  loadBooks();\n}\nfunction showOrHideLoadMoreBtn(show) {\n  if (show) {\n    loadMoreNode.style.display = 'block';\n  } else {\n    loadMoreNode.style.display = 'none';\n  }\n}\nasync function togglePurchasedBook(book) {\n  let purchasedBooks = getPurchasedBooks();\n  if (book.isPurchased) {\n    purchasedBooks.push(book.id);\n  } else {\n    purchasedBooks = purchasedBooks.filter(purchasedBookId => purchasedBookId !== book.id);\n  }\n  setInCartBadgeCount(purchasedBooks.length);\n  localStorage.setItem('purchased', JSON.stringify(purchasedBooks));\n}\nfunction setInCartBadgeCount(count) {\n  if (count) {\n    inCartBadgeNode.innerText = count;\n    inCartBadgeNode.style.display = 'block';\n  } else {\n    inCartBadgeNode.innerText = '';\n    inCartBadgeNode.style.display = 'none';\n  }\n}\nwindow.addEventListener('DOMContentLoaded', () => {\n  rootNode = document.querySelector('.books__grid');\n  inCartBadgeNode = document.querySelector('.header__icon-badge');\n  const bookMenu = new _BookMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"](selectMenuItemHandler);\n  loadMoreNode = document.querySelector('.books__loading .books__buy');\n  loadMoreNode.addEventListener('click', loadBooks);\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

            /***/
        }),

        /***/ "./src/js/slider.js":
        /*!**************************!*\
          !*** ./src/js/slider.js ***!
          \**************************/
        /***/ (() => {

            eval("function showSlider(options) {\n  let sliderContainer = document.querySelector('.slider__wrapper');\n  let images = document.querySelectorAll('.slider__item');\n  let sliderArrows = document.querySelector('.slider__arrows');\n  let dots = document.querySelector('.slider__dots');\n  options = options || {\n    autoplay: false,\n    dots: true,\n    interval: 0\n  };\n  initImages();\n  if (options.dots) {\n    initDots();\n  }\n  initArrows();\n  if (options.autoplay) {\n    initAutoplay();\n  }\n  function initImages() {\n    if (!images) {\n      return;\n    }\n    images.forEach((img, index) => {\n      img.setAttribute('data-index', index);\n      img.classList.add('number-' + index);\n      if (index === 0) {\n        img.classList.add('active');\n      } else {\n        img.classList.remove('active');\n      }\n    });\n  }\n  function initArrows() {\n    sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow => {\n      arrow.addEventListener('click', function () {\n        let activeSlide = +sliderContainer.querySelector('.active').dataset.index;\n        let imgLength = images.length;\n        let nextSlide;\n        if (arrow.classList.contains('slider__arrow--prev')) {\n          if (activeSlide === 0) {\n            nextSlide = imgLength - 1;\n          } else {\n            nextSlide = activeSlide - 1;\n          }\n        } else {\n          if (activeSlide === imgLength - 1) {\n            nextSlide = 0;\n          } else {\n            nextSlide = activeSlide + 1;\n          }\n        }\n        runSlider(nextSlide);\n      });\n    });\n  }\n  function initDots() {\n    if (!images) {\n      return;\n    }\n    images.forEach((img, index) => {\n      let dot = `<li class=\"slider__dots--item number-${index} ${index === 0 ? 'active' : ''}\" data-index=\"${index}\"></li>`;\n      dots.innerHTML += dot;\n    });\n    dots.querySelectorAll('.slider__dots--item').forEach(dot => {\n      dot.addEventListener('click', function () {\n        runSlider(this.dataset.index);\n      });\n    });\n  }\n  function runSlider(number) {\n    sliderContainer.querySelector('.active').classList.remove('active');\n    sliderContainer.querySelector('.number-' + number).classList.add('active');\n    if (options.dots) {\n      dots.querySelector('.active').classList.remove('active');\n      dots.querySelector('.number-' + number).classList.add('active');\n    }\n  }\n  function initAutoplay() {\n    setInterval(() => {\n      let activeSlide = +sliderContainer.querySelector(\".active\").dataset.index;\n      let nextSlide;\n      if (activeSlide === images.length - 1) {\n        nextSlide = 0;\n      } else {\n        nextSlide = activeSlide + 1;\n      }\n      runSlider(nextSlide);\n    }, options.interval);\n  }\n}\nlet sliderOptions = {\n  autoplay: true,\n  dots: true,\n  interval: 5000\n};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  showSlider(sliderOptions);\n});\n\n//# sourceURL=webpack:///./src/js/slider.js?");

            /***/
        }),

        /***/ "./src/index.html":
        /*!************************!*\
          !*** ./src/index.html ***!
          \************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/apple-touch-icon.png */ \"./src/img/apple-touch-icon.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-32x32.png */ \"./src/img/favicon-32x32.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/favicon-16x16.png */ \"./src/img/favicon-16x16.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/slider/arrow.svg */ \"./src/img/slider/arrow.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/slider/slide1.png */ \"./src/img/slider/slide1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/slider/slide2.png */ \"./src/img/slider/slide2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/slider/slide3.png */ \"./src/img/slider/slide3.png\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"Content-Type\\\" content=\\\"text/html; charset=utf-8\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"initial-scale=1, maximum-scale=1, user-scalable=no\\\">\\r\\n    <meta name=\\\"format-detection\\\" content=\\\"telephone=no\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge,chrome=1\\\">\\r\\n    <link rel=\\\"apple-touch-icon\\\" sizes=\\\"180x180\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n    <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"32x32\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\">\\r\\n    <link rel=\\\"icon\\\" type=\\\"image/png\\\" sizes=\\\"16x16\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\">\\r\\n    <title>Bookshop</title>\\r\\n</head>\\r\\n<body>\\r\\n<header class=\\\"header\\\">\\r\\n    <div class=\\\"header__container\\\">\\r\\n        <div class=\\\"header__inner\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"header__logo\\\">Bookshop</a>\\r\\n            <div class=\\\"header__menu-wrapper\\\">\\r\\n                <ul class=\\\"header__menu\\\">\\r\\n                    <li><a href=\\\"#\\\" class=\\\"header__menu--active\\\">books</a></li>\\r\\n                    <li><a href=\\\"#\\\">audiobooks</a></li>\\r\\n                    <li><a href=\\\"#\\\">Stationery & gifts</a></li>\\r\\n                    <li><a href=\\\"#\\\">blog</a></li>\\r\\n                </ul>\\r\\n                <ul class=\\\"header__menu\\\">\\r\\n                    <li><a href=\\\"#\\\" class=\\\"header__icon header__icon--user\\\"></a></li>\\r\\n                    <li><a href=\\\"#\\\" class=\\\"header__icon header__icon--search\\\"></a></li>\\r\\n                    <li><a href=\\\"#\\\" class=\\\"header__icon header__icon--shop\\\">\\r\\n                        <span class=\\\"header__icon-badge\\\"></span>\\r\\n                    </a></li>\\r\\n                </ul>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</header>\\r\\n<section class=\\\"slider\\\">\\r\\n    <div class=\\\"slider__container\\\">\\r\\n        <div class=\\\"slider__wrapper\\\">\\r\\n            <a href=\\\"#\\\" class=\\\"slider__link slider__link--first\\\">\\r\\n                <span>Change old book on new</span>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n            </a>\\r\\n\\r\\n            <a href=\\\"#\\\" class=\\\"slider__link slider__link--last\\\">\\r\\n                <span>top 100 books 2022</span>\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\">\\r\\n            </a>\\r\\n\\r\\n            <div class=\\\"slider__item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Первый слайд\\\">\\r\\n            </div>\\r\\n            <div class=\\\"slider__item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Второй слайд\\\">\\r\\n            </div>\\r\\n            <div class=\\\"slider__item\\\">\\r\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Третий слайд\\\">\\r\\n            </div>\\r\\n\\r\\n            <div class=\\\"slider__arrows\\\">\\r\\n                <a href=\\\"#\\\" class=\\\"slider__arrow slider__arrow--prev\\\">&#10094;</a>\\r\\n                <a href=\\\"#\\\" class=\\\"slider__arrow slider__arrow--next\\\">&#10095;</a>\\r\\n            </div>\\r\\n        </div>\\r\\n\\r\\n        <ul class=\\\"slider__dots\\\"></ul>\\r\\n    </div>\\r\\n</section>\\r\\n<section class=\\\"books\\\">\\r\\n    <div class=\\\"books__container\\\">\\r\\n        <a href=\\\"#\\\" class=\\\"books__mobile\\\">\\r\\n            <span></span>\\r\\n            <span></span>\\r\\n            <span></span>\\r\\n        </a>\\r\\n        <ul class=\\\"books__menu\\\">\\r\\n            <li><a href=\\\"#\\\" class=\\\"active\\\" data-type=\\\"subject:Architecture\\\">Architecture</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Art\\\">Art & Fashion</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Biography & Autobiography\\\">Biography</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Business\\\">Business</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Crafts & Hobbies\\\">Crafts & Hobbies</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Drama\\\">Drama</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Fiction\\\">Fiction</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Cooking\\\">Food & Drink</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Health & Fitness\\\">Health & Wellbeing</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:History\\\">History & Politics</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Humor\\\">Humor</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Poetry\\\">Poetry</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Psychology\\\">Psychology</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Science\\\">Science</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Technology\\\">Technology</a></li>\\r\\n            <li><a href=\\\"#\\\" data-type=\\\"subject:Travel\\\">Travel & Maps</a></li>\\r\\n        </ul>\\r\\n        <div class=\\\"books__grid\\\">\\r\\n\\r\\n        </div>\\r\\n        <div class=\\\"books__loading\\\">\\r\\n            <button class=\\\"books__buy\\\">Load more</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</section>\\r\\n</body>\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./src/index.html?");

            /***/
        }),

        /***/ "./src/scss/styles.scss":
        /*!******************************!*\
          !*** ./src/scss/styles.scss ***!
          \******************************/
        /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

            /***/
        }),

        /***/ "./src/img/apple-touch-icon.png":
        /*!**************************************!*\
          !*** ./src/img/apple-touch-icon.png ***!
          \**************************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"65c2666492ddbe20f81b.png\";\n\n//# sourceURL=webpack:///./src/img/apple-touch-icon.png?");

            /***/
        }),

        /***/ "./src/img/books/default-book.png":
        /*!****************************************!*\
          !*** ./src/img/books/default-book.png ***!
          \****************************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"9842731c402e5930e594.png\";\n\n//# sourceURL=webpack:///./src/img/books/default-book.png?");

            /***/
        }),

        /***/ "./src/img/favicon-16x16.png":
        /*!***********************************!*\
          !*** ./src/img/favicon-16x16.png ***!
          \***********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"105e272d6a69f5639182.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-16x16.png?");

            /***/
        }),

        /***/ "./src/img/favicon-32x32.png":
        /*!***********************************!*\
          !*** ./src/img/favicon-32x32.png ***!
          \***********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"6bbad0fbdad85b87ac19.png\";\n\n//# sourceURL=webpack:///./src/img/favicon-32x32.png?");

            /***/
        }),

        /***/ "./src/img/slider/arrow.svg":
        /*!**********************************!*\
          !*** ./src/img/slider/arrow.svg ***!
          \**********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"e9f51e4343fc7f9ad49a.svg\";\n\n//# sourceURL=webpack:///./src/img/slider/arrow.svg?");

            /***/
        }),

        /***/ "./src/img/slider/slide1.png":
        /*!***********************************!*\
          !*** ./src/img/slider/slide1.png ***!
          \***********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"7a62de0f63e216812a1d.png\";\n\n//# sourceURL=webpack:///./src/img/slider/slide1.png?");

            /***/
        }),

        /***/ "./src/img/slider/slide2.png":
        /*!***********************************!*\
          !*** ./src/img/slider/slide2.png ***!
          \***********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"bb24fb21a898d6de9df6.png\";\n\n//# sourceURL=webpack:///./src/img/slider/slide2.png?");

            /***/
        }),

        /***/ "./src/img/slider/slide3.png":
        /*!***********************************!*\
          !*** ./src/img/slider/slide3.png ***!
          \***********************************/
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";
            eval("module.exports = __webpack_require__.p + \"b62ead6875579370ce04.png\";\n\n//# sourceURL=webpack:///./src/img/slider/slide3.png?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ 	// The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/                () => (module['default']) :
                /******/                () => (module);
            /******/
            __webpack_require__.d(getter, {a: getter});
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ 		// define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ 		// define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {value: true});
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/publicPath */
    /******/
    (() => {
        /******/
        __webpack_require__.p = "/dist";
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/
    (() => {
        /******/
        __webpack_require__.b = document.baseURI || self.location.href;
        /******/
        /******/ 		// object to store loaded and loading chunks
        /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/
        var installedChunks = {
            /******/            "main": 0
            /******/
        };
        /******/
        /******/ 		// no chunk on demand loading
        /******/
        /******/ 		// no prefetching
        /******/
        /******/ 		// no preloaded
        /******/
        /******/ 		// no HMR
        /******/
        /******/ 		// no HMR manifest
        /******/
        /******/ 		// no on chunks loaded
        /******/
        /******/ 		// no jsonp function
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ 	// startup
    /******/ 	// Load entry module and return exports
    /******/ 	// This entry module can't be inlined because the eval devtool is used.
    /******/
    var __webpack_exports__ = __webpack_require__("./src/js/index.js");
    /******/
    /******/
})()
;
