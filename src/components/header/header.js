import React from "react";
import './header.css';
import cartIcon from '../../assets/images/cart.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to={'/'} className="logo">
                <span>ReStore</span>
            </Link>
            <div className="cart">
                <Link to={'/cart-page'} className="cart-icon">
                    <img src={cartIcon} alt="cart"/>
                </Link>
                <span>5 items</span>
                <span>($200)</span>
            </div>
        </div>
    )
}

export default Header;