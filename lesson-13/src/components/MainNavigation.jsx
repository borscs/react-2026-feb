import classes from './MainNavigation.module.css';
import {Link, NavLink} from "react-router";


export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							className={({isActive}) =>
								isActive ? classes.active : undefined
							}
							to="/"
						>Home</NavLink>
					</li>
					<li>
						<NavLink
							to="/products"
							className={({isActive}) =>
								isActive ? classes.active : undefined
						}>Products</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
