import React from "react";
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import { bookAddToCart, bookRemoveFromCart, allBooksRemoveFromCart } from "../../actions/actions";
import compose from "../../utils";

const ShoppingCart = ({ cartItems, orderTotal, onIncrease, onDecrease, onDelete}) => {
    console.log(cartItems);
    const renderRow = (item, idx) => {
        const { name, total, count } = item;
        return (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}</td>
                <td>
                    <div className="action-btns">
                        <button
                            onClick={() => onIncrease(item.id)}
                        >+</button>
                        <button
                            onClick={() => onDecrease(item.id)}
                        >-</button>
                        <button
                            onClick={() => onDelete(item.id)}
                        >/</button>
                    </div>
                </td>
            </tr>
        ) 
    }

    return (
        <div className="order-table">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(renderRow)
                    }
                </tbody>
            </table>
            <div>
                {orderTotal}
            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        cartItems,
        orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddToCart,
    onDecrease: bookRemoveFromCart,
    onDelete: allBooksRemoveFromCart
}
export default compose(connect(mapStateToProps, mapDispatchToProps))(ShoppingCart);