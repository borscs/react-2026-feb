import classes from './page.module.css';
import ImagePicker from "../../../components/meals/Image-picker";
import {shareMeal} from "../../../lib/actions";
import MealFormSubmitOn from "../../../components/meals/meail-form-submiton";


export default function SharePage() {
	
	return (
		<>
			<header className={classes.header}>
				<h1>Share your <span className={classes.highlight}>favorite meal</span></h1>
				<p> Or any other meal you fell needs sharing!</p>
			</header>
			<main className={classes.main}>
				<form className={classes.form} action={shareMeal}>
					<div className={classes.row}>
						<p>
							<label htmlFor="name">Your Name</label>
							<input type="text" id="name" name="name" required/>
						</p>
						<p>
							<label htmlFor="email">Your Email</label>
							<input type="email" id="email" name="email" required/>
						</p>
					</div>
					<div>
						<p>
							<label htmlFor="title">Title</label>
							<input type="text" id="title" name="title" required/>
						</p>
						<p>
							<label htmlFor="summary">Short Summary</label>
							<input type="text" id="summary" name="summary" required/>
						</p>
						<p>
							<label htmlFor="instructions">Instructions</label>
							<textarea id="instructions" name="instructions" rows="10" required></textarea>
						</p>
						<ImagePicker label={"Your image"} name={"image"}/>
						<p className={classes.actions}>
							<MealFormSubmitOn/>
						</p>
					</div>
				</form>
			</main>
		</>
	);
}
