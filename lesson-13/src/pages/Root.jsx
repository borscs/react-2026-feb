import MainNavigation from "../components/MainNavigation";
import classes from './Root.module.css';
import {Outlet} from "react-router";

export default function RootLayout(){
	return (
		<>
			<MainNavigation/>
			<main className={classes.content}>
				<Outlet/>
			</main>
		</>
	)
}
