import Link from "next/link";
import logoImg from "../../assets/logo.png";
import Image from "next/image";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
	
	return (
		<>
			<MainHeaderBackground/>
			<header className={classes.header}>
				<Link href={"/"} className={classes.logo}>
					<Image src={logoImg} alt="A server surrounded by magic sparkles." priority={true}/>
					NextLevel Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<Link href="/meals">Brows Meals</Link>
						</li>
						<li>
							<Link href="/community">Community</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
