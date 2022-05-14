import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext.js';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggleProfile, setToggleProfile] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);

	const { state } = useContext(AppContext);

	return (
		<>
			<nav>
				<img src={menu} alt="menu" className="menu" />
				<div className="navbar-left">
					<img src={logo} alt="logo" className="nav-logo" />
					<ul>
						<li>
							<a href="/react-shop/home">All</a>
						</li>
						<li>
							<a href="/react-shop/home">Clothes</a>
						</li>
						<li>
							<a href="/react-shop/home">Electronics</a>
						</li>
						<li>
							<a href="/react-shop/home">Furniture</a>
						</li>
						<li>
							<a href="/react-shop/home">Toys</a>
						</li>
						<li>
							<a href="/react-shop/home">Others</a>
						</li>
					</ul>
				</div>
				<div className="navbar-right">
					<ul>
						<li className="navbar-email" onClick={()=>setToggleProfile(!toggleProfile)}>
							nathan@example.com
						</li>
						<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
							<img src={shoppingCart} alt="shopping cart" />
							{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
						</li>
					</ul>
				</div>
				{toggleProfile && <Menu />}
				{toggleOrders && <MyOrder />}
			</nav>

		</>
	);
}

export default Header;