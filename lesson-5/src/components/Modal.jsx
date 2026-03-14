import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Button from "./Button.jsx";

const Modal= forwardRef(function Modal({buttonCaption, children}, ref) {
	const dialog = useRef();
	
	useImperativeHandle(ref, () => {
	return {
		open(){
			dialog.current.showModal();
		}
	}
	});
	
	return createPortal(
		<dialog ref={dialog} className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-md">
			{children}
			<form method="dialog">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>,
		document.getElementById('modal-root')
	);
});

export default Modal;
