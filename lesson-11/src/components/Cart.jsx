import {useContext} from "react";
import {CartContext} from "../store/CartContext.jsx";
import Modal from "./UI/Modal.jsx";
import Cartitem from "./Cartitem.jsx";
import Button from "./UI/Button.jsx";
import {UserProgressContext} from "../store/UserProgressContext.jsx";

export default function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	
	const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
	
	function handleCloseCart() {
		userProgressCtx.hideCart();
	}
	
	function handleGoToCheckout() {
		userProgressCtx.showCheckout();
	}
	
	return (
		<Modal className='cart' open={userProgressCtx.progress === 'cart'}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map(item => (
					<Cartitem
						key={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onIncrease={() => cartCtx.addItem(item)}
						onDecrease={() => cartCtx.removeItem(item.id)}
					/>
				))}
				<p className='cart-total'>Total: {cartTotal}</p>
				<p className='modal-actions'>
					<Button textOnly onClick={handleCloseCart}>
						Close
					</Button>
						<Button onClick={handleGoToCheckout}>Go to CheckOut</Button>
				</p>
			</ul>
		</Modal>
	)
	
}
