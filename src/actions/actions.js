const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCESS",
        payload: newBooks
    }
}

const booksRequested = () => {
    return {
        type: "FETCH_BOOKS_REQUEST"
    }
}

const booksError = (error) => {
    return {
        type: "FETCH_BOOKS_ERROR",
        payload: error
    }
}

const bookAddToCart = (id) => {
    return {
        type: "BOOK_ADD_TO_CART",
        payload: id
    }
}

const bookRemoveFromCart = (id) => {
    return {
        type: "BOOK_REMOVE_FROM_CART",
        payload: id
    }
}

const allBooksRemoveFromCart = (id) => {
    return {
        type: "ALL_BOOKS_REMOVE_FROM_CART",
        payload: id
    }
}

const fetchingBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
        .then( data => dispatch(booksLoaded(data)))
        .catch( error => dispatch(booksError(error)))
}

export {
    fetchingBooks,
    bookAddToCart,
    allBooksRemoveFromCart,
    bookRemoveFromCart
}