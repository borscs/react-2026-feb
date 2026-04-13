import {useState} from "react";
import Input from "./Input.jsx";

export default function LoginState() {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPassword, setEnteredPassword] = useState('');
	
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	})
	
	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	})
	
	const emailIsInvalid = didEdit && !enteredValues.email.includes('@');
	const passwordIsInvalid = didEdit && enteredValues.password.length < 6;
	
	function onSubmit(event) {
		event.preventDefault();
		
		console.log('submitting', enteredValues);
		// setEnteredEmail('');
		// setEnteredPassword('');
		setEnteredValues({
			email: '',
			password: '',
		})
		setDidEdit({
			email: false,
			password: false,
		})
	}
	
	return (
		<form onSubmit={onSubmit}>
			<h2>Login</h2>
			
			<div className="control-row">
				<Input
					label={'Email'}
					id={'email'}
					type={'email'}
					name={'email'}
					onBlur={() => setDidEdit(prev => ({...prev, email: true}))}
					onChange={(event) => setEnteredValues(prev => ({...prev, email: event.target.value}))}
					value={enteredValues.email}
					error={emailIsInvalid && 'Please enter a valid email!'}
				/>
				
				<Input
					label={'Password'}
					id={'password'}
					type={'password'}
					name={'password'}
					onBlur={() => setDidEdit(prev => ({...prev, password: true}))}
					onChange={(event) => setEnteredValues(prev => ({...prev, password: event.target.value}))}
					value={enteredValues.password}
					error={passwordIsInvalid && 'Please enter a valid password!'}
				/>
			
			</div>
			
			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
