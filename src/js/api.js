const API_KEY = 'AIzaSyCmyzmrtCsScrz5Ev1K6XaF0K9KlVt-Wl8'

export default {
    getBooks(startIndex, type) {
        const url = new URL('https://www.googleapis.com/books/v1/volumes?printType=books&langRestrict=en')
        url.searchParams.append('key', API_KEY)
        url.searchParams.append('q', `"${type}"`)
        url.searchParams.append('startIndex', startIndex)
        url.searchParams.append('maxResults', 6)

        return fetch(url).then(response => response.json())
    }
}