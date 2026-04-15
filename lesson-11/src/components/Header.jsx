import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";

export default function Header(){
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	
	const totalCartItems = cartCtx.items.reduce((total, item) => total + item.quantity, 0);
	
	function handleCartClick() {
		userProgressCtx.showCart();
	}
	return (
		<header id="main-header">
			<div id='title'>
				<img src={logoImg} alt='A restaurant'/>
				<h1>React Restaurant</h1>
			</div>
			<nav>
				<Button textOnly={true} onClick={handleCartClick}>Cart ({totalCartItems})</Button>
			</nav>
		</header>
	)
}
