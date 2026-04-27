import {Link} from "react-router";

const PRODUCTS = [
	{ id: 'p1', title: 'Product 1' },
	{ id: 'p2', title: 'Product 2' },
	{ id: 'p3', title: 'Product 3' },
];


export default function ProductionsPage() {
	return (
		<div>
			<h1>Productions</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, cumque.</p>
			<ul>
				{PRODUCTS.map(product => (
					<li key={product.id}>
						<Link to={product.id}>{product.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
};
