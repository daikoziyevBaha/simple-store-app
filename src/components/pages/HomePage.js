import React from "react";
import BookList from "../book-list";
import ShoppingCart from "../shopping-cart-table";

const HomePage = () => {
    return (
        <div>
            <BookList />
            <ShoppingCart />
        </div>
    )
}

export default HomePage;