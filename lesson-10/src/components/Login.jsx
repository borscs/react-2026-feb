import {useRef, useState} from "react";

export default function Login() {
	const [enteredEmailValid, setEnteredEmailValid] = useState(false);
	const email = useRef();
	const password = useRef();
	
	function onSubmit(event) {
		event.preventDefault();
		
		if(!email.current.value.includes('@')){
			setEnteredEmailValid(true);
			return
		}
		
		setEnteredEmailValid(false);
		console.log(email.current.value, password.current.value);
		
		email.current.value = '';
		 password.current.value = '';
	}
	
	return (
		<form onSubmit={onSubmit}>
			<h2>Login</h2>
			
			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						ref={email}
					/>
					<div className="control-error">
						{enteredEmailValid && <p>Please enter a valid email address.</p>}
					</div>
				</div>
				
				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						required
						id="password"
						type="password"
						name="password"
						ref={password}
						/>
				</div>
			</div>
			
			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
