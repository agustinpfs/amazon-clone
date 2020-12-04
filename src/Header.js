import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img 
                className='header__logo'
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
            />

            <div 
            className='header__search'>
                <input
                    className='header__searchInput'
                    type="text"
                />
                <SearchIcon 
                className='header__searchIcon'
                />                

            </div>

            <div
            className='header__nav'>
                <div className='header__option'>
                    <span className="header__optionlineOne">
                        Hello agu
                    </span>
                    <span className="header__optionlineTwo">
                        Sign In
                    </span>
                </div>
                <div className='header__option'>
                    <span className="header__optionlineOne">
                        Returns
                    </span>
                    <span className="header__optionlineTwo">
                        & Orders
                    </span>
                </div>
                <div className='header__option'>
                    <span className="header__optionlineOne">
                        hello agu
                    </span>
                    <span className="header__optionlineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionlineTwo header__basketCount">
                        0
                    </span>
                </div>


            </div>
        </div>
    )
}

export default Header;
