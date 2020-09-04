import React from 'react'
import './Header.styles.css';
// Router imports : 
import { Link } from 'react-router-dom';
// Material UI imports : 
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Header() {
  return (
    <nav className="header">
         {/* Logo */}
         <Link to="/">
         <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
             alt="logo" className="header__logo"/>
         </Link>
         
         {/*  SearchBar */}
        <div className="header__search">
           <input type="text" className="header__searchInput"/>
           <SearchIcon  className="header__searchIcon"/>
        </div>

         {/* Links */}
         <div className="header__nav">

           <Link to="/login" className="header__link" >
             <div className="header__options">
                <span className="header__optionLineOne" >Hello</span>
                <span className="header__optionLineTwo" >Sign In</span>
             </div>
           </Link>

           <Link to="/" className="header__link" >
             <div className="header__options">
                <span className="header__optionLineOne" >Returns</span>
                <span className="header__optionLineTwo" >& Orders</span>
             </div>
           </Link>

           <Link to="/" className="header__link" >
             <div className="header__options">
                <span className="header__optionLineOne" >Your</span>
                <span className="header__optionLineTwo" >Prime</span>
             </div>
           </Link>

           <Link to="/checkout"  className="header__link" >
             <div className="header__optionBasket">
                 <ShoppingBasketIcon  />
                 <span className="header__optionLineTwo header__BasketCount" >0</span>
             </div>
           </Link>


         </div>
    </nav>
  )
}

export default Header
