const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        name = book.name,
        count = 0,
        total = 0 } = item;
    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateCartItems = (cartItems, newItem, itemIndex) => {

    if (newItem.count === 0) {
        return [
            ...cartItems.slice(0, itemIndex),
            ...cartItems.slice(itemIndex + 1)
        ]
    }

    if (itemIndex !== -1) {
        return [
            ...cartItems.slice(0, itemIndex),
            newItem,
            ...cartItems.slice(itemIndex + 1)
        ]
    }
    return [
        ...cartItems,
        newItem
    ]
}

const updateOrderItems = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state
    const book = books.find((book) => bookId === book.id)
    const itemIndex = cartItems.findIndex((item) => item.id === book.id)
    const item = cartItems[itemIndex]
    const newItem = updateCartItem(book, item, quantity)
    return  {
            ...state.shoppingCart,
            cartItems: updateCartItems(cartItems, newItem, itemIndex) 
    }
}


const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
        }
    }
    switch(action.type) {
        case "BOOK_ADD_TO_CART":
            return updateOrderItems(state, action.payload, 1) 
        case "BOOK_REMOVE_FROM_CART":
            return updateOrderItems(state, action.payload, -1) 
        case "ALL_BOOKS_REMOVE_FROM_CART":
            const item = state.shoppingCart.cartItems.find(item => item.id === action.payload)
            return updateOrderItems(state, action.payload, -item.count)
        default:
            return state.shoppingCart
    }
}

export default updateShoppingCart;