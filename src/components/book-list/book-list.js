import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import './book-list.css';
import { connect } from 'react-redux';
import withBookstoreService from "../hoc";
import { fetchingBooks, bookAddToCart } from "../../actions/actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const BookList = ({books, addToCart}) => {
    return (
        <ul className="cart-list">
            { books.map(book => {
                return <li key={book.id} className="cart-item">
                    <BookListItem book={book} addToCart={() => addToCart(book.id)} />
                </li>
            })}
        </ul>
    )
}

const BookListContainer = ({books, loading, error, fetchingBooks, addToCart}) => {
    
    useEffect(() => {
        fetchingBooks()
    }, [])

    if (error) {
        return <ErrorIndicator error={ error.message }/>
    }

    if (loading) {
        return <Spinner />
    }

    return (
        <BookList books={books} addToCart={addToCart} />
    )
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
    return {
        books,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        fetchingBooks: fetchingBooks(dispatch, bookstoreService),
        addToCart: (id) => dispatch(bookAddToCart(id))
    }
}
   
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);