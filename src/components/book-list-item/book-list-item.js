import React from "react";
import './book-list-item.css';

const BookListItem = ({book, addToCart}) => {
    const { name, author, price, image } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={image} alt="bookimg" />
            </div>
            <div className="book-details">
                <a className="book-title">
                    <span>{name}</span>
                </a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button
                    onClick={addToCart}
                    className="btn-add-to-cart"
                >Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;