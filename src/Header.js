import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img 
                className='header__logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            />

            <div 
            className='header__search'>
                <input
                    className='header__searchInput'
                    type="text"/>

            </div>

            <div
            className='header__nav'>
                <div className='header__option'>
                    <span className="optionlineOne">
                        Hello agu
                    </span>
                    <span className="optionlineTwo">
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className="optionlineOne">
                        Returns
                    </span>
                    <span className="optionlineTwo">
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className="optionlineOne">
                        hello agu
                    </span>
                    <span className="optionlineTwo">
                        Sign In
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header;
